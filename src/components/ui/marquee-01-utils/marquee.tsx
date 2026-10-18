import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  const trackClass = vertical
    ? "lhq-marquee-track-vertical"
    : reverse
      ? "lhq-marquee-track-reverse"
      : "lhq-marquee-track";

  return (
    <div
      className={cn(
        "flex overflow-hidden p-2 [--duration:70s] [--gap:1rem] [gap:var(--gap)]",
        pauseOnHover && "group",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          className={cn(
            "flex w-max shrink-0 justify-around [gap:var(--gap)]",
            vertical ? "flex-col" : "flex-row",
            trackClass,
          )}
          style={{
            animationName: vertical ? "landlord-marquee-vertical" : "landlord-marquee",
            animationDuration: "var(--duration)",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: reverse && !vertical ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
