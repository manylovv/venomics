import venomicsLogo from "@/assets/images/venomics-logo.svg";

export const Logo = () => {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={venomicsLogo} className="size-10" />
      <span className="text-2xl">
        Venom<span className="font-medium">ics</span>
      </span>
    </a>
  );
};
