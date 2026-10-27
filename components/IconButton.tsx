import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";

type IconComponent = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;

interface IconButtonProps {
  href?: string;
  icon: IconComponent;
  label: string;
  value: string;
  external?: boolean;
}

export default function IconButton({ href, icon: Icon, label, value, external = true }: IconButtonProps) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-on-accent sm:h-14 sm:w-14">
        <Icon size={24} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold">{label}</span>
        <span className="block break-all text-sm text-muted-foreground sm:truncate">{value}</span>
      </span>
    </>
  );

  // Without href the card is informational only: no link, no arrow, no hover lift.
  if (!href) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 sm:gap-5 sm:p-5">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:gap-5 sm:p-5"
    >
      {content}
      <ArrowUpRight size={20} aria-hidden className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}
