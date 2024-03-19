import map from "@/assets/images/map.svg";
import { JoinWaitListDialog } from "../Dialog";

export const CallToAction = () => {
  return (
    <section>
      <div className="flex w-full flex-col overflow-hidden rounded-2xl lg:flex-row">
        <div className="flex min-h-[300px] basis-3/4 flex-col items-center gap-6 bg-zinc-800 p-6 md:px-12 md:py-8 lg:flex-row lg:gap-0">
          <div className="flex items-center justify-between">
            <h2 className="flex flex-col leading-[1.2]">
              <span className="lg:text-stroke text-3xl font-bold lg:text-6xl">
                Start your
              </span>
              <span className="max-w-md text-3xl font-medium leading-[1.25]  lg:text-[52px]">
                data project on the platform
              </span>
            </h2>
          </div>
          <img src={map} />
        </div>
        <div className="flex basis-1/4 flex-col gap-8 bg-zinc-700 bg-opacity-40 p-6 md:p-8">
          <p className="text-lg">
            A data tool that provides an intuitive interface for blockchain data
            analysis. It offers data source connections, SQL querying, diverse
            visualizations, and collaborative features for shared analysis.
          </p>
          <JoinWaitListDialog />
        </div>
      </div>
    </section>
  );
};
