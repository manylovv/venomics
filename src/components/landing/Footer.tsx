import redoubtLogo from "@/assets/images/redoubt-logo.svg";
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-3 pb-10 md:flex-row-reverse md:justify-between md:pb-8">
      <Socials />
      <div className="flex items-center gap-2">
        <span className="font-medium">Powered by</span>
        <img src={redoubtLogo} className="mb-0.5 h-6" />
      </div>
    </footer>
  );
};
