export const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
        <h1 className="max-w-2xl text-4xl font-bold leading-[1.2] md:text-7xl">
          <span className="md:text-stroke">Get early access</span> to the{" "}
          <span className="bg-main-gradient bg-clip-text text-transparent">
            analytics
          </span>
          <br />
          of tomorrow
        </h1>
        <p className="max-w-lg text-lg font-normal leading-normal text-zinc-400 md:text-2xl">
          <span className="font-bold text-white">Highly-vetted data</span> and
          tools you can trust. Leveraging state-of-the-art AI solutions and
          advanced visualisation.
        </p>
      </div>
    </section>
  );
};
