import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import Aftermovie from "@components/home/Aftermovie";
import Carousel from "@components/home/Carousel";
import Contact from "@components/home/Contact";
import Faq from "@components/home/Faq";
import Hero from "@components/home/Hero";
import Newsletter from "@components/home/Newsletter";
import Partners from "@components/home/Partners";
import SlideUp from "@components/scroll-reveal/SlideUp";
import type { NextPage } from "next";

// import Exhibitors from "@components/home/Exhibitors";
// import Program from "@components/program/Program";
// import ProgramDesktop from "@components/program/ProgramDesktop";
// import Guests from "@components/home/Guests";

// To Do
// Sitemapa generátor
// Komponent "program již brzy"
// Seo
// Finální content

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

      {/* <Wrapper as={"section"} paddedContent="base">
        <SlideUp>
          <MainHeading level={2} number="01" size="2xl">
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
            <MainHeading level={2} size="2xl" number="02">
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
          </SlideUp>
          <PendingContent className="mt-16 w-full md:mt-28" />
          <Exhibitors />
        </div>
      </Wrapper> */}

      {/* <Wrapper as={"section"} id="program" paddedContent="base">
        <SlideUp>
          <MainHeading level={2} number="03" size="2xl">
            Program
          </MainHeading>
        </SlideUp>
        <SlideUp
          as={"p"}
          delay="200"
          className="mt-8 max-w-prose text-lg font-medium"
        >
          I letos se držíme osvědčené taktiky, program bude složený z přednášek
          a workshopů na čtyřech stagích. Přednášky, stejně jako minule, budou
          volně přístupné pro všechny návštěvníky.
          <br />
          <br />
          Na workshopy se letos budeš muset registrovat nebo si na něj zakoupit
          vstupenku, záleží na jaký půjdeš.
        </SlideUp>
        <PendingContent className="mt-20 md:mt-36" />
        <Program className="mt-20" />
        <ProgramDesktop className="mt-36" />
      </Wrapper> */}

      <Wrapper as={"section"} id="newsletter" paddedContent="base">
        <SlideUp>
          <Newsletter />
        </SlideUp>
      </Wrapper>

      <section>
        <Wrapper className="pt-20 lg:pt-36">
          <SlideUp className="flex w-full items-center justify-center">
            <MainHeading level={2} number="2022" size="2xl">
              Takový byl předchozí ročník
            </MainHeading>
          </SlideUp>
        </Wrapper>

        <div className="py-20 lg:py-36">
          <Carousel />
        </div>
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
