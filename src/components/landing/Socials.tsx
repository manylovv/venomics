import { useMemo } from "react";
import { TwitterIcon, GithubIcon, MailIcon, TelegramIcon } from "../icons";

export const Socials = () => {
  const socials = useMemo(() => {
    return [
      {
        name: "Twitter",
        url: "https://twitter.com/Venom_Analytics",
        icon: <TwitterIcon />,
      },
      {
        name: "Email",
        url: "mailto:venomics@devnull.ae",
        icon: <MailIcon />,
      },
      {
        name: "Telegram",
        url: "https://t.me/VenomAnalytics",
        icon: <TelegramIcon />,
      },
      {
        name: "GitHub",
        url: "https://github.com/Venomics",
        icon: <GithubIcon />,
      },
    ];
  }, []);

  return (
    <div className="flex gap-3">
      {socials.map((social) => {
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            className="flex size-10 items-center justify-center rounded-full text-white transition-colors duration-100 *:size-7 hover:text-zinc-300"
          >
            {social.icon}
          </a>
        );
      })}
    </div>
  );
};
