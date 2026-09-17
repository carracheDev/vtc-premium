import Link from "next/link";
import type { ComponentProps } from "react";

const styles = {
  gold: "bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-light)]",
  dark: "bg-[var(--ink)] text-[var(--paper)] hover:bg-[#24241f]",
  outline: "border border-white/30 text-white hover:border-[var(--gold)] hover:text-[var(--gold-light)]",
};

type ButtonProps = ComponentProps<typeof Link> & { tone?: keyof typeof styles };

export function Button({ className = "", tone = "gold", children, ...props }: ButtonProps) {
  return (
    <Link className={`inline-flex min-h-12 items-center justify-center gap-3 px-5 text-xs font-semibold tracking-[0.02em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-light)] ${styles[tone]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
