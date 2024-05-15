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
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { CustomImage, images } from "../configs/images";

// import PendingContent from "@components/home/PendingContent";

// To Do
// Sitemapa generátor
// Komponent "program již brzy"
// Seo
// Finální content

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

function ImageGallery() {
  const [index, setIndex] = useState(-1);
  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        rowHeight={244}
        onClick={handleClick}
        margin={8}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

const Home: NextPage = () => {
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

      <Wrapper className="pt-20">
        <p className="font-display text-3xl font-normal uppercase leading-[1.4] text-white lg:text-5xl">
          Jsme v plném proudu s přípravami na letošní ročník. Opět se můžete
          těšit na vystavovatele předních značek, zajímavé hosty a další.
          Program bude složený z přednášek a workshopů na dvou vnitřních a dvou
          venkovních stagích. Přednášky budou volně přístupné pro všechny
          návštěvníky. Na workshopy bude opět nutná registrace. Brzy zveřejníme
          další informace, tak odebírej novinky, ať ti nic neuteče!
        </p>
      </Wrapper>

      <Wrapper as={"section"} id="newsletter" paddedContent="base">
        <SlideUp>
          <Newsletter />
        </SlideUp>
      </Wrapper>

      <section>
        <Wrapper className="pt-12 lg:pt-10">
          <SlideUp className="flex w-full items-center justify-center">
            <MainHeading level={2} number="2023" size="2xl">
              Takový byl předchozí ročník
            </MainHeading>
          </SlideUp>
        </Wrapper>
        <Wrapper>
          <div className="cursor-default py-20 lg:py-36">
            {/* <Carousel /> */}
            <ImageGallery />
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
