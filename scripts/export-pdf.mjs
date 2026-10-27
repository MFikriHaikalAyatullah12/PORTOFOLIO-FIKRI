// Exports the static site (out/) to a single PDF: one page per route, full page height.
// Usage: npm run build && npm run export:pdf
import { createServer } from "node:http";
import { readFile, stat, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";
import { PDFDocument } from "pdf-lib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const targets = [
  path.join(root, "public", "portfolio.pdf"),
  path.join(root, "out", "portfolio.pdf"),
  path.join(root, "..", "Portfolio - M. Fikri Haikal Ayatullah.pdf"),
];

// About content is merged into "/" via print-only markup, so /tentang is skipped.
const routes = ["/", "/project", "/sertifikasi", "/skill", "/kontak"];
const PAGE_WIDTH = 1280;
// Raster images are re-encoded in-page before printing so the PDF doesn't embed full-size PNG sources.
const IMAGE_SCALE = 1.5;
const IMAGE_MAX_WIDTH = 1200;
const IMAGE_JPEG_QUALITY = 0.82;

const browserCandidates = [
  process.env.BROWSER_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
  ".txt": "text/plain",
};

async function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = [
    path.join(outDir, clean),
    path.join(outDir, `${clean}.html`),
    path.join(outDir, clean, "index.html"),
  ];
  for (const c of candidates) {
    try {
      if ((await stat(c)).isFile()) return c;
    } catch {}
  }
  return null;
}

function serveStatic() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const file = await resolveFile(req.url ?? "/");
      if (!file) {
        res.writeHead(404);
        return res.end("Not found");
      }
      res.writeHead(200, { "Content-Type": mime[path.extname(file)] ?? "application/octet-stream" });
      res.end(await readFile(file));
    });
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function main() {
  if (!existsSync(path.join(outDir, "index.html"))) {
    throw new Error("out/ not found. Run `npm run build` first.");
  }
  const executablePath = browserCandidates.find((p) => existsSync(p));
  if (!executablePath) throw new Error("No Edge/Chrome found. Set BROWSER_PATH.");

  const server = await serveStatic();
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await puppeteer.launch({ executablePath, headless: true });

  try {
    const page = await browser.newPage();
    // Force dark theme before next-themes reads localStorage.
    await page.evaluateOnNewDocument(() => localStorage.setItem("theme", "dark"));
    // DPR 1: text/vectors stay crisp regardless; DPR 2 only inflates rasterized effects.
    await page.setViewport({ width: PAGE_WIDTH, height: 900, deviceScaleFactor: 1 });
    await page.emulateMediaType("print");

    const merged = await PDFDocument.create();

    for (const route of routes) {
      await page.goto(`${base}${route}`, { waitUntil: "networkidle0" });
      await page.evaluate(async () => {
        await document.fonts.ready;
        const timeout = new Promise((r) => setTimeout(r, 5000));
        const visible = Array.from(document.images).filter((img) => !img.complete && img.offsetParent !== null);
        await Promise.race([
          Promise.all(visible.map((img) => new Promise((r) => img.addEventListener("load", r, { once: true })))),
          timeout,
        ]);
      });
      await page.evaluate(
        async ({ scale, maxWidth, quality }) => {
          const imgs = Array.from(document.images).filter((img) => img.complete && img.naturalWidth > 0 && img.offsetParent !== null);
          await Promise.all(
            imgs.map(async (img) => {
              const rect = img.getBoundingClientRect();
              const target = Math.min(maxWidth, Math.round(rect.width * scale));
              if (!target || target >= img.naturalWidth) return;
              const canvas = document.createElement("canvas");
              canvas.width = target;
              canvas.height = Math.round((img.naturalHeight * target) / img.naturalWidth);
              const ctx = canvas.getContext("2d");
              ctx.fillStyle = "#fff";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              const next = new Promise((r) => img.addEventListener("load", r, { once: true }));
              img.removeAttribute("srcset");
              img.removeAttribute("sizes");
              img.src = canvas.toDataURL("image/jpeg", quality);
              await next;
            }),
          );
        },
        { scale: IMAGE_SCALE, maxWidth: IMAGE_MAX_WIDTH, quality: IMAGE_JPEG_QUALITY },
      );
      const height = await page.evaluate(() =>
        Math.ceil(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, document.querySelector("main")?.getBoundingClientRect().bottom ?? 0)),
      );
      if (process.env.PDF_PREVIEW_DIR) {
        await mkdir(process.env.PDF_PREVIEW_DIR, { recursive: true });
        const name = route === "/" ? "home" : route.slice(1);
        await page.screenshot({ path: path.join(process.env.PDF_PREVIEW_DIR, `${name}.png`), fullPage: true });
      }
      const buf = await page.pdf({
        printBackground: true,
        width: `${PAGE_WIDTH}px`,
        height: `${height}px`,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        pageRanges: "1",
      });
      const src = await PDFDocument.load(buf);
      const [copied] = await merged.copyPages(src, [0]);
      merged.addPage(copied);
      console.log(`✓ ${route.padEnd(14)} ${PAGE_WIDTH}×${height}px`);
    }

    merged.setTitle("Portofolio — M. Fikri Haikal Ayatullah");
    merged.setAuthor("M. Fikri Haikal Ayatullah");
    const bytes = await merged.save();
    for (const t of targets) {
      // mkdir on a drive root (e.g. D:\) throws EPERM even with recursive: true.
      if (!existsSync(path.dirname(t))) await mkdir(path.dirname(t), { recursive: true });
      await writeFile(t, bytes);
      console.log(`→ ${t}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
