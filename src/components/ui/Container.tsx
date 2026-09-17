import type { HTMLAttributes } from "react";

export function Container({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`mx-auto w-[min(100%-2.5rem,74rem)] ${className}`} {...props} />;
}
