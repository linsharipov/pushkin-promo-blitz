import logoSrc from "@/assets/logo.svg";

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
      alt="Театр имени Пушкина"
      className={`h-10 w-auto sm:h-12 ${invert ? "invert brightness-0" : ""} ${className}`}
      width={304}
      height={83}
    />
  );
}
