"use client";
import { useState, type ReactNode } from "react";

export interface TooltipProps {
  label: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ label, children, side = "right" }: TooltipProps) {
  const [open, setOpen] = useState(false);
  let sideClasses = "";

  if (side === "top") {
    sideClasses = "bottom-full left-1/2 -translate-x-1/2 mb-2";
  } else if (side === "bottom") {
    sideClasses = "top-full left-1/2 -translate-x-1/2 mt-2";
  } else if (side === "left") {
    sideClasses = "right-full top-1/2 -translate-y-1/2 mr-2";
  } else {
    sideClasses = "left-full top-1/2 -translate-y-1/2 ml-2";
  }

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-sm bg-bg-elevated-highlight px-2 py-1 text-xs font-medium text-white shadow-lg ${sideClasses}`}
        >
          {label}
        </span>
      )}
    </span>
  );
}
