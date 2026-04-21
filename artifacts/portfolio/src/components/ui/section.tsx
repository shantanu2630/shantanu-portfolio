import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  containerClassName?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-24 md:py-32 w-full", className)}
        {...props}
      >
        <div className={cn("container mx-auto px-6 md:px-12 lg:px-24", containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export const SectionHeader = ({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) => (
  <div className={cn("mb-16", className)}>
    {subtitle && (
      <p className="text-primary font-mono text-sm tracking-wider uppercase mb-3">
        {subtitle}
      </p>
    )}
    <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-foreground">
      {title}
    </h2>
  </div>
);
