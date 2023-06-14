import SlideUp from "@components/scroll-reveal/SlideUp";

export default function Partners() {
  return (
    <div className="mt-16 grid w-full grid-cols-2 gap-x-12 gap-y-20 md:grid-cols-4 lg:mt-32">
      <SlideUp
        as={"a"}
        href="https://www.phototools.cz"
        target="blank"
        rel="noopener noreferrer"
        className="reveal-delay-0 col-span-1 flex w-full cursor-pointer items-center justify-center"
      >
        <div className={`h-[64px] w-[180px]`}>
          <img
            src="/logos/brands/phototools.svg"
            alt="Phototools - logo"
            width="128"
            height="46"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"a"}
        href="https://www.papirnaplzen.cz"
        target="blank"
        rel="noopener noreferrer"
        className="reveal-delay-100 col-span-1 flex w-full cursor-pointer items-center justify-center"
      >
        <div className={`h-[48] w-[70px]`}>
          <img
            src="/logos/brands/papirna.svg"
            alt="Papírna - logo"
            width="66"
            height="91"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      {/* <SlideUp
        as={"a"}
        href="https://www.depo2015.cz"
        target="blank"
        rel="noopener noreferrer"
        className="reveal-delay-100 col-span-1 flex w-full cursor-pointer items-center justify-center"
      >
        <div className={`h-[64] w-[160px]`}>
          <img
            src="/logos/brands/depo-2015.svg"
            alt="DEPO2015 - logo"
            width="128"
            height="46"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </SlideUp> */}
      <SlideUp
        as={"a"}
        href="https://imagepro.cz"
        target="blank"
        rel="noopener noreferrer"
        className="reveal-delay-0 md:reveal-delay-200 col-span-1 flex w-full cursor-pointer items-center justify-center"
      >
        <div className={`h-[64] w-[110px]`}>
          <img
            src="/logos/brands/image-pro.svg"
            alt="Image pro - logo"
            width="128"
            height="46"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
      <SlideUp
        as={"a"}
        href="https://reveal.cz"
        target="blank"
        rel="noopener noreferrer"
        className="reveal-delay-100 md:reveal-delay-300 col-span-1 flex w-full cursor-pointer items-center justify-center"
      >
        <div className={`h-[48] w-[70px]`}>
          <img
            src="/logos/brands/reveal.svg"
            alt="Reveal - logo"
            width="128"
            height="46"
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      </SlideUp>
    </div>
  );
}
