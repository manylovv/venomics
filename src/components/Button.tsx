import { cn } from "@/utils";
import { PropsWithChildren } from "react";

export const Button = (
  props: PropsWithChildren<React.ComponentProps<"button">>,
) => {
  return (
    <button
      {...props}
      className={cn(
        "group relative cursor-pointer rounded-full bg-main-gradient px-6 py-3 text-lg text-black before:absolute before:inset-0.5 before:z-10 before:hidden before:rounded-full before:bg-zinc-800 hover:before:block",
        props.className,
      )}
    >
      <span className="relative z-20 group-hover:bg-main-gradient group-hover:bg-clip-text group-hover:text-transparent">
        {props.children}
      </span>
    </button>
  );
};
