import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/25",
        hero: "bg-gradient-hero text-primary-foreground hover:scale-105 glow-primary font-semibold",
        tech: "bg-gradient-tech text-primary-foreground hover:scale-105 glow-tech font-medium",
        success:
          "bg-gradient-success text-primary-foreground hover:scale-105 glow-accent font-medium",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline:
          "border border-card-border bg-card/50 backdrop-blur-sm text-foreground hover:bg-card hover:scale-105 hover:border-primary/30",
        ghost:
          "text-muted-foreground hover:bg-card hover:text-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        premium:
          "bg-gradient-accent text-accent-foreground hover:scale-105 glow-accent font-semibold",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-12 text-lg font-semibold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
