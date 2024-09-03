import SlideUp from "@components/scroll-reveal/SlideUp";

const exhibitors = [
  {
    src: "/logos/brands/phototools.svg",
    alt: "Logo Phototools",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[160px]",
  },
  {
    src: "/logos/brands/sony.svg",
    alt: "Logo Sony",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  {
    src: "/logos/brands/canon.svg",
    alt: "Logo Canon",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  {
    src: "/logos/brands/nikon.svg",
    alt: "Logo Nikon",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  // 2023
  {
    src: "/logos/brands/fujifilm.svg",
    alt: "Logo Fujifilm",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[160px]",
  },
  {
    src: "/logos/brands/tamron.svg",
    alt: "Logo Tamron",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  {
    src: "/logos/brands/peak-design.svg",
    alt: "Logo Peak Design",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  // {
  //   src: "/logos/brands/manfortto.svg",
  //   alt: "Logo Manfortto",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[140px]",
  // },
  // 2023
  // {
  //   src: "/logos/brands/benq.svg",
  //   alt: "Logo BenQ",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[130px]",
  // },
  // 2023
  // {
  //   src: "/logos/brands/colorama.svg",
  //   alt: "Logo Colorama",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[180px]",
  // },
  {
    src: "/logos/brands/focus-nordic.svg",
    alt: "Logo Focus Nordic",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  {
    src: "/logos/brands/eizo.svg",
    alt: "Logo Eizo",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  {
    src: "/logos/brands/sigma.svg",
    alt: "Logo Sigma",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  {
    src: "/logos/brands/histogram.svg",
    alt: "Logo Histogram",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[140px]",
  },
  // {
  //   src: "/logos/brands/irix.svg",
  //   alt: "Logo Irix",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[140px]",
  // },
  // {
  //   src: "/logos/brands/3lt.svg",
  //   alt: "Logo 3 Legged Thing",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[160px]",
  // },
  // {
  //   src: "/logos/brands/kvalitni-fotky.svg",
  //   alt: "Logo Kvalitní fotky",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[160px]",
  // },
  // {
  //   src: "/logos/brands/leicaklub.svg",
  //   alt: "Logo Leica Klub",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[160px]",
  // },
  // {
  //   src: "/logos/brands/avenger.svg",
  //   alt: "Logo Avenger",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[160px]",
  // },
  // {
  //   src: "/logos/brands/joby.svg",
  //   alt: "Logo Joby",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[140px]",
  // },
  // {
  //   src: "/logos/brands/lowepro.svg",
  //   alt: "Logo Lowepro",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[140px]",
  // },
  // 2023
  // {
  //   src: "/logos/brands/fotobatohy-cz.svg",
  //   alt: "Logo Fujifilm",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[160px]",
  // },
  // 2023
  // {
  //   src: "/logos/brands/jupio.svg",
  //   alt: "Logo Jupio",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[140px]",
  // },
  // 2023
  {
    src: "/logos/brands/sekonic.svg",
    alt: "Logo Sekonic",
    width: "128",
    height: "46",
    wrapperClassName: "h-[64px] w-[160px]",
  },
  // 2023
  // {
  //   src: "/logos/brands/dicapac.svg",
  //   alt: "Logo Dicapac",
  //   width: "128",
  //   height: "46",
  //   wrapperClassName: "h-[64px] w-[140px]",
  // },
];

export default function Exhibitors() {
  return (
    <div className="mt-16 grid w-full grid-cols-2 gap-x-12 gap-y-20 md:grid-cols-4 lg:mt-32 xl:grid-cols-6">
      {exhibitors.map((exhibitor, index) => (
        <SlideUp
          as={"div"}
          className={`col-span-1 flex w-full items-center justify-center`}
          key={index}
        >
          <div className={exhibitor.wrapperClassName}>
            <img
              src={exhibitor.src}
              alt={exhibitor.alt}
              width={exhibitor.width}
              height={exhibitor.height}
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </SlideUp>
      ))}
    </div>
  );
}
