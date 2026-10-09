export default function SelectChevron({ className = "right-3 top-1/2 -translate-y-1/2", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`pointer-events-none absolute flex ${compact ? "h-5 w-5" : "h-7 w-7"} items-center justify-center rounded-full border border-coral/15 bg-coral/10 text-coral ${className}`}>
      <svg className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="m7 9 5 5 5-5" />
      </svg>
    </span>
  );
}
