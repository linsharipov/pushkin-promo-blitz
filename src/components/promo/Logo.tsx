export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`font-display font-bold leading-[0.85] tracking-tight ${className}`}
      aria-label="Театр имени Пушкина"
    >
      <div className="text-[0.7em]">ТЕАТР ИМЕНИ</div>
      <div>ПУШКИНА</div>
    </div>
  );
}
