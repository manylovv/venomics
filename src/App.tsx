import { CallToAction } from "./components/landing/CallToAction";
import { Cards } from "./components/landing/Cards";
import { Footer } from "./components/landing/Footer";
import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { Spacer } from "./components/ui/Spacer";

export const App = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <Header />
      <Spacer className="h-6 sm:h-16" />
      <Hero />
      <Spacer className="h-6 sm:h-24" />
      <div className="flex flex-col gap-8">
        <Cards />
        <CallToAction />
      </div>
      <Spacer className="h-10 sm:h-16" />
      <Footer />
    </div>
  );
};
