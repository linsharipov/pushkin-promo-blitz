import logoSrc from "@/assets/logo.png";

export function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src={logoSrc}
      alt="Театр имени Пушкина — 75 лет"
      className={`h-10 w-auto sm:h-12 ${invert ? "invert" : ""} ${className}`}
      width={420}
      height={160}
    />
  );
}
