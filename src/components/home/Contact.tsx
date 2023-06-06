import Button from "@components/Button";
import Heading from "@components/Heading";
import MainHeading from "@components/MainHeading";
import Wrapper from "@components/Wrapper";
import { socials } from "@configs/socials";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

// Icons
import SlideUp from "@components/scroll-reveal/SlideUp";
import { FaGlobe } from "react-icons/fa";
import { HiDocumentDuplicate, HiPaperAirplane } from "react-icons/hi";
import { ctaMenu } from "src/configs/routes";

export default function Contact() {
  const notify = () => toast("Adresa byla zkopírována do schránky");
  return (
    <>
      <Wrapper as={"section"} id="kontakt" paddedContent="sm">
        <div className="lg:grid lg:grid-cols-7 lg:gap-32">
          <SlideUp as={"div"} className="col-span-2">
            <MainHeading level={2} size="2xl">
              Kontakt
            </MainHeading>
          </SlideUp>

          {/* Kontakt Kuba */}
          <SlideUp
            as={"div"}
            className="lg:reveal-delay-200 col-span-2 mt-8 flex flex-col lg:mt-0"
          >
            <Heading level={3} size="base" font="display" weight="medium">
              Jakub Flaišman
            </Heading>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={ctaMenu[1].link}
                className="c-link-3-a text-lg font-medium text-white outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
              >
                {ctaMenu[1].label}
              </a>
              <a
                href={ctaMenu[2].link}
                className="c-link-3-a text-lg font-medium text-white outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
              >
                {ctaMenu[2].label}
              </a>
            </div>
          </SlideUp>

          {/* Socky */}
          <SlideUp
            as={"div"}
            className="lg:reveal-delay-400 col-span-3 mt-8 flex flex-col lg:mt-0"
          >
            <Heading level={3} size="base" font="display" weight="medium">
              Sledujte nás
            </Heading>
            <div className="mt-6 flex gap-3 xs:gap-6 md:gap-10">
              {socials.map((social) => (
                <Button
                  key={social.ariaLabel}
                  as="a"
                  href={social.link}
                  aria-label={social.ariaLabel}
                  target="blank"
                  rel="noopener noreferrer"
                  type="outlined"
                  isIconBox={true}
                  shape="pill"
                >
                  <social.icon />
                </Button>
              ))}
            </div>
          </SlideUp>
        </div>

        <div className="pt-16 md:pt-28 lg:grid lg:grid-cols-7 lg:gap-32">
          <SlideUp as={"div"} className="col-span-2">
            <Heading
              level={3}
              size="lg"
              font="display"
              color="primary"
              weight="medium"
            >
              Místo konání
            </Heading>
          </SlideUp>

          {/* Místo konání */}
          <SlideUp
            as={"div"}
            className="lg:reveal-delay-200 col-span-5 mt-8 flex flex-col lg:mt-0"
          >
            <Heading level={3} size="lg">
              Papírna Plzeň
            </Heading>
            <span className="mt-1 block text-white">
              Zahradní 173/2, 326 00 Plzeň 2-Slovany-Východní Předměstí
            </span>
            <div className="mt-6 flex gap-3 xs:gap-6 md:gap-10">
              <Button
                aria-label="Zkopírování adresy místa konání"
                onClick={() => {
                  notify();
                  copy(
                    "Zahradní 173/2, 326 00 Plzeň 2-Slovany-Východní Předměstí"
                  );
                }}
                as="button"
                isIconBox={true}
                shape="pill"
              >
                <HiDocumentDuplicate />
              </Button>
              <Button
                as="a"
                href="https://www.google.com/maps/dir/49.7291907,13.3695219/papírna+plzeň/@49.7342684,13.3663154,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x410cb2c01f99e4b7:0x2c1d58ecadd7cf9!2m2!1d13.3853885!2d49.7364143?entry=ttu"
                target="blank"
                aria-label="Navigace na místo konání pomocí google map"
                type="filled"
                isIconBox={true}
                shape="pill"
              >
                <HiPaperAirplane />
              </Button>
              <Button
                as="a"
                href="https://www.papirnaplzen.cz"
                target="blank"
                aria-label="Webová stránka Papírna Plzeň"
                type="filled"
                isIconBox={true}
                shape="pill"
              >
                <FaGlobe />
              </Button>
            </div>
          </SlideUp>
        </div>
      </Wrapper>

      {/* Mapa */}
      <Wrapper size="lg" className="mt-8 md:mt-14">
        <iframe
          title="Místo konání festivalu"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pap%C3%ADrna%20plze%C5%88+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="aspect-square w-full md:aspect-[2/1]"
          loading="lazy"
        />
      </Wrapper>
    </>
  );
}
