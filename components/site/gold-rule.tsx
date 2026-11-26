import { cn } from "@/lib/utils";

export function GoldRule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("h-[2px] w-14 bg-ssj-gold", className)} />;
}

export function SectionLabel({
  children,
  align = "left",
  onDark = false,
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center")}>
      <GoldRule />
      <span
        className={cn(
          "text-xs font-bold tracking-[0.2em]",
          onDark ? "text-ssj-blue-accent" : "text-ssj-blue"
        )}
      >
        {children}
      </span>
    </div>
  );
}
