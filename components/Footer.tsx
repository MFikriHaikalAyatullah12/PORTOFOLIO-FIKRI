import { Mail } from "lucide-react";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer data-print-hide className="border-t border-border">
      <div className="safe-x safe-bottom mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-200 hover:bg-muted hover:text-foreground"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-200 hover:bg-muted hover:text-foreground"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-md transition-colors duration-200 hover:bg-muted hover:text-foreground"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
