import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import Aftermovie from "@components/home/Aftermovie";
import Contact from "@components/home/Contact";
import Faq from "@components/home/Faq";
import Hero from "@components/home/Hero";
import Newsletter from "@components/home/Newsletter";
import Partners from "@components/home/Partners";
import SlideUp from "@components/scroll-reveal/SlideUp";
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { Gallery } from "react-grid-gallery";

const photos = [
  {
    src: "/images/grid-photos/1.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/2.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/3.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/0.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "/images/grid-photos/4.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/5.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/6.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/7.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/8.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/9.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/10.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/11.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/12.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/13.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/14.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "/images/grid-photos/15.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/16.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/17.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/18.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/19.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/images/grid-photos/20.jpg",
    width: 3,
    height: 2,
  },
];

// import PendingContent from "@components/home/PendingContent";

// To Do
// Sitemapa generátor
// Komponent "program již brzy"
// Seo
// Finální content

const Home: NextPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Seo
        title="Největší fotografický festival na západě Čech"
        description=""
      />
      <Hero />
      <Wrapper as={"section"} id="aftermovie" size="lg" paddedContent="none">
        <Aftermovie />
      </Wrapper>

      {/* <Wrapper as={"section"} id="hoste" paddedContent="base">
        <SlideUp>
          <MainHeading level={2} size="2xl">
            Hosté
          </MainHeading>
        </SlideUp>
        <SlideUp
          as={"p"}
          delay="200"
          className="mt-8 max-w-xl text-lg font-medium"
        >
          Letošní rok bude opět plný zajímavých jmen. Mrkej, kdo letos dorazí
          jako speaker nebo lektor.
        </SlideUp>
        <PendingContent className="mt-20 md:mt-36" />
        <Guests className="mt-20 md:mt-36" />
      </Wrapper> */}

      {/* <Wrapper as={"section"} id="vystavovatele" paddedContent="base">
        <div className="flex flex-col items-center justify-center">
          <SlideUp>
            <MainHeading level={2} size="2xl">
              Vystavovatelé
            </MainHeading>
          </SlideUp>
          <SlideUp
            as={"p"}
            delay="200"
            className="mt-8 max-w-prose text-center text-lg font-medium"
          >
            Přijď si vyzkoušet techniku těchto značek, omrknout novinky a
            poradit se s výběrem nového kousku.
          </SlideUp> */}
      {/* <PendingContent className="mt-16 w-full md:mt-28" /> */}
      {/* <Exhibitors />
        </div>
      </Wrapper> */}

      {/* <Wrapper as={"section"} id="program" paddedContent="base">
        <SlideUp>
          <MainHeading level={2} size="2xl">
            Program a registrace
          </MainHeading>
        </SlideUp>
        <SlideUp
          as={"p"}
          delay="200"
          className="mt-8 max-w-prose text-lg font-medium"
        >
          I letos se držíme osvědčené taktiky, program bude složený z přednášek
          a workshopů na dvou vnitřních a dvou venkovních stagích. Přednášky,
          stejně jako minule, budou volně přístupné pro všechny návštěvníky.
          <br />
          <br />
          Na workshopy se i letos budeš muset registrovat nebo si na něj
          zakoupit vstupenku, záleží na jaký půjdeš.
        </SlideUp> */}
      {/* <PendingContent className="mt-20 md:mt-36" /> */}
      {/* <Alert
          status="info"
          variant="filled"
          hasIcon={true}
          title="Výběr stage"
          text="Stage lze horizontálně posouvat. Pro zobrazení programu z jiné stage stačí najet a kliknout na jinou."
          className="mt-10 block text-primary sm:mt-0 sm:hidden"
        />
        <Program className="mt-10 sm:mt-20" />
        <ProgramDesktop className="mt-36" />
      </Wrapper> */}

      <Wrapper className="py-8">
        <p className="font-display text-5xl font-normal uppercase leading-[1.2] text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </Wrapper>

      <Wrapper as={"section"} id="newsletter" paddedContent="base">
        <SlideUp>
          <Newsletter />
        </SlideUp>
      </Wrapper>

      <section>
        <Wrapper className="pt-20 lg:pt-36">
          <SlideUp className="flex w-full items-center justify-center">
            <MainHeading level={2} number="2023" size="2xl">
              Takový byl předchozí ročník
            </MainHeading>
          </SlideUp>
        </Wrapper>
        <Wrapper>
          <div className="cursor-default py-20 lg:py-36">
            {/* <Carousel /> */}
            <Gallery
              images={photos}
              enableImageSelection={false}
              rowHeight={244}
            />
          </div>
        </Wrapper>
      </section>

      <Contact />

      <Wrapper
        as={"section"}
        id="faq"
        paddedContent="base"
        className="grid grid-cols-1 gap-20 sm:mt-20 lg:grid-cols-3"
      >
        <div className="col-span-1">
          <SlideUp>
            <MainHeading level={2} size="2xl">
              Faq
            </MainHeading>
          </SlideUp>
          <SlideUp
            as={"p"}
            delay="200"
            className="mt-8 max-w-xl text-lg font-medium"
          >
            Odpovědi na to, na co se nás často ptáte.
          </SlideUp>
        </div>
        <div className="col-span-2">
          <Faq />
        </div>
      </Wrapper>

      {/* <Wrapper as={"section"} size="lg" id="faq" paddedContent="base">
        <div className="relative flex w-full flex-col items-center justify-center gap-7 overflow-hidden rounded-2xl p-4 sm:aspect-video sm:gap-16 md:p-10">
          <Image
            src="/images/slides/slide-1.jpg"
            alt="Vystavovatelé"
            width={1920}
            height={1440}
            className="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
          />
          <SlideUp className="relative z-30">
            <Heading font="display" size="xl" level={2} className="text-center">
              Chceš být mezi vystavovateli na letošním ročníku?
              <br />
              Napiš nám na
            </Heading>
          </SlideUp>
          <a
            href={ctaMenu[2].link}
            className="c-link-3-a relative z-30 text-center font-display text-3xl text-white xs:text-4xl lg:text-6xl"
          >
            {ctaMenu[2].label}
          </a>
        </div>
      </Wrapper> */}

      <Wrapper
        as={"section"}
        id="vystavovatele"
        paddedContent="base"
        className="mb-24"
      >
        <div className="flex flex-col items-center justify-center">
          <SlideUp>
            <MainHeading level={2} size="2xl">
              Partneři
            </MainHeading>
          </SlideUp>
          <Partners />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
