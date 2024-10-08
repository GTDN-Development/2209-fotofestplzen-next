import Alert from "@components/Alert";
import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Program from "@components/program/Program";
import ProgramDesktop from "@components/program/ProgramDesktop";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
// import ExportedImage from "next-image-export-optimizer";

const ProgramPage: NextPage = () => {
  return (
    <>
      <Seo title="Program a mapa" description="" noFollow noIndex />
      <Wrapper as={"header"} paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Program
        </MainHeading>
        <div className="grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2 md:gap-16">
          <p className="text-lg font-medium">
            I letos se držíme osvědčené taktiky, program bude složený z
            přednášek a workshopů na čtyřech stagích. Přednášky, stejně jako
            minule, budou volně přístupné pro všechny návštěvníky.
          </p>
          <p className="text-lg font-medium">
            Na workshopy se letos budeš muset registrovat nebo si na něj
            zakoupit vstupenku, záleží na jaký půjdeš.
          </p>
        </div>
      </Wrapper>

      <Wrapper as={"section"} id="program" paddedContent="sm">
        {/* <PendingContent className="mt-10 md:mt-16" /> */}
        <Alert
          status="info"
          variant="filled"
          hasIcon={true}
          title="Výběr stage"
          text="Stage lze horizontálně posouvat. Pro zobrazení programu z jiné stage stačí najet a kliknout na jinou."
          className="block text-primary sm:hidden"
        />
        <Program className="mt-4 sm:mt-0" />
        <ProgramDesktop hasBackground={false} className="mt-10" />
      </Wrapper>

      <Wrapper as={"section"} id="mapa" paddedContent="base">
        <Heading level={2} size="xl" font="display">
          Mapa areálu
        </Heading>
        {/* <PendingContent className="mt-10 md:mt-20" /> */}
        <p className="mt-10 max-w-2xl text-lg font-medium">
          Kdo hledá, najde! Mrkni na mapku ať víš, kde jsou jednotlivý stage,
          stánky vystavovatelů nebo kam zajít na “vychlazenou Plzeň”!
        </p>
        <Button
          as="a"
          href="/images/mapa-2024/foto-fest-plzen-2024-mapa.pdf"
          download
          leftIcon={<HiDownload />}
          className="mt-10"
          size="lg"
        >
          Stáhnout mapu (PDF)
        </Button>
      </Wrapper>

      <Wrapper
        size="lg"
        className="flex flex-col items-stretch justify-start gap-10 pb-28 md:pb-52"
      >
        <div className="aspect-video w-full overflow-hidden rounded-2xl border-4 bg-body">
          <Image
            src={"/images/mapa-2024/prizemi.jpg"}
            alt={"Mapa areálu festivalu - přízemí"}
            width={2000}
            height={1200}
            className="aspect-video h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl border-4 bg-body">
          <Image
            src={"/images/mapa-2024/1-patro.jpg"}
            alt={"Mapa areálu festivalu - 1. patro"}
            width={2000}
            height={1200}
            className="aspect-video h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default ProgramPage;
