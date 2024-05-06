import Wrapper from "@components/Wrapper";

export default function Hero() {
  return (
    <Wrapper
      as="header"
      className="relative flex h-[90vh] min-h-[640px] items-center justify-start lg:min-h-[728px]"
    >
      {/* Content */}
      <div className="z-10 pt-52 pb-32">
        <div className="anim-slide-up reveal-delay-300 flex items-start justify-start">
          <h1 className="mr-2 font-display text-4xl font-medium uppercase leading-[1.2] text-white xs:text-5xl sm:text-7xl lg:text-9xl 2xl:text-[11.5rem]">
            Foto fest Plzeň
          </h1>
          <span className="font-display text-base font-medium text-primary xs:text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
            2024
          </span>
        </div>
        <p className="anim-slide-up reveal-delay-600 mt-2 max-w-3xl text-lg font-medium md:text-xl">
          Největší fotografický festival na západě Čech.{" "}
          <span className="uppercase text-primary md:ml-2">#fotofestplzen</span>
        </p>
        {/* <span className="mt-2 block text-xl font-semibold uppercase sm:text-2xl md:text-3xl">
          #fotofestplzen
        </span> */}
        <div className="mt-8 flex flex-col gap-5 md:mt-16 md:flex-row md:gap-14">
          <div className="anim-slide-up reveal-delay-800 flex flex-col rounded-xl bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Kdy
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              1.10. 2023
            </span>
          </div>
          <div className="anim-slide-up reveal-delay-800 flex flex-col rounded-xl bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Kde
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              Papírna Plzeň
            </span>
          </div>
          <div className="anim-slide-up reveal-delay-1000 flex flex-col rounded-xl bg-gray-700/50 py-1.5 px-4 md:py-3 md:px-7">
            <span className="block text-sm font-semibold tracking-wide">
              Vstupné
            </span>
            <span className="block font-display text-2xl font-normal uppercase leading-tight text-primary sm:text-3xl">
              Zdarma
            </span>
          </div>
        </div>
      </div>
      {/* Subtle effect */}
      {/* <div className="pointer-events-none absolute -top-12 -right-48 -z-10 h-[600px] w-[600px] rounded-full bg-secondary opacity-30 blur-[128px]"></div> */}
    </Wrapper>
  );
}
