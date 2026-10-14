export function LoadingSkeleton({ className = "h-8 w-20" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block max-w-full animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`}
    />
  );
}
