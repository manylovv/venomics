import { PropsWithChildren } from "react";
import { JoinWaitListDialog } from "../Dialog";
import hand from "@/assets/images/hand.svg";
import message from "@/assets/images/message.svg";
import { Socials } from "./Socials";

export const Cards = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-8">
      <Card
        title="Venom"
        subtitle="Analytics"
        description="The platform offers a Venom blockchain engine for tracking crypto activities. It allows users to customise alerts for on and off-chain activities"
        imageUrl={hand}
      >
        <JoinWaitListDialog />
      </Card>
      <Card
        title="Join"
        subtitle="Our social networks"
        description="Follow our news and be the first to know about new data projects on Venom"
        imageUrl={message}
      >
        <Socials />
      </Card>
    </section>
  );
};

type CardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
};

const Card = (props: PropsWithChildren<CardProps>) => {
  const { title, subtitle, imageUrl, description } = props;

  return (
    <div className="relative mt-12 w-full rounded-2xl bg-zinc-800 p-6 md:p-8 lg:min-h-[350px]">
      <h2 className="text-stroke absolute inset-0 -top-6 left-6 h-fit text-5xl font-bold uppercase md:text-6xl lg:-top-14 lg:left-8 lg:text-8xl">
        {title}
      </h2>
      <div className="relative flex w-full flex-col gap-4 pt-3 md:gap-6 md:pt-5">
        <div className="flex flex-col gap-2 md:gap-6">
          <h3 className="text-xl font-medium md:text-3xl">{subtitle}</h3>
          <span className="hidden flex-none md:inline">{props.children}</span>

          <p className="lg:max-w-[320px]">{description}</p>
        </div>
        <span className="*:w-full sm:*:w-fit md:hidden">{props.children}</span>
      </div>
      <img
        src={imageUrl}
        className="absolute bottom-8 right-12 hidden lg:block"
      />
    </div>
  );
};
