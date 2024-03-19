import * as React from "react";

import { cn } from "@/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "./Button";

export function JoinWaitListDialog() {
  const [open, setOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      setIsSuccess(false);
    });
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          <Button>Join waitlist</Button>
        </DialogTrigger>
        <DialogContent className="">
          {!isSuccess && <h2 className="text-xl font-bold">Join waitlist</h2>}
          <ProfileForm
            isSuccess={isSuccess}
            onSuccess={() => setIsSuccess(true)}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>Join waitlist</Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-4 px-4 pt-0">
        {!isSuccess && <h2 className="text-xl font-bold">Join waitlist</h2>}

        <ProfileForm
          isSuccess={isSuccess}
          onSuccess={() => setIsSuccess(true)}
        />
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
}

type ProfileFormProps = {
  className?: string;
  isSuccess: boolean;
  onSuccess: () => void;
} & React.ComponentProps<"form">;

function ProfileForm({ className, isSuccess, onSuccess }: ProfileFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      onSuccess();
      setIsSubmitting(false);
      setEmail("");
    } else {
      setError(data.message);
    }
  };

  return (
    <form className={className} onSubmit={onSubmit}>
      {!isSuccess && !error && (
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="your@mail.com"
            className="rounded-full p-6 text-lg "
            disabled={isSubmitting}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn("flex-none", isSubmitting && "pointer-events-none")}
          >
            {isSubmitting ? (
              <div className="pointer-events-none flex items-center justify-center gap-2 text-zinc-800">
                <div className="size-5 animate-spin rounded-full border-4 border-zinc-600 border-t-zinc-900 group-hover:border-t-zinc-300" />
                Submitting...
              </div>
            ) : (
              "Join now"
            )}
          </Button>
        </div>
      )}
      {isSuccess && (
        <p className="text-main-green text-center">Thank you for joining!</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
    </form>
  );
}
