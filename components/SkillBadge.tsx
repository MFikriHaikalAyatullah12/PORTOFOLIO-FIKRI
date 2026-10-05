import { Check } from "lucide-react";

export default function SkillBadge({ name }: { name: string }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors duration-200 hover:border-accent hover:bg-accent-soft">
      <Check size={14} className="text-accent" aria-hidden />
      {name}
    </li>
  );
}
