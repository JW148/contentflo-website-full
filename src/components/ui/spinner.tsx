"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<SVGSVGElement> {
  size?: "sm" | "md" | "lg";
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClass = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    }[size];

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("animate-spin", sizeClass, className)}
        {...props}
        ref={ref}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }
);

Spinner.displayName = "Spinner";

export { Spinner };
