import BrandLogo from "@components/BrandLogo";
import Heading from "@components/Heading";
import SocialLinks from "@components/SocialLinks";
import Wrapper from "@components/Wrapper";
import Link from "next/link";
import { ctaMenu, mainRoutes } from "../../../configs/routes";
import FooterAuthor from "./FooterAuthor";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-body-100">
      <Wrapper
        size="lg"
        className="grid grid-cols-1 gap-y-12 gap-x-12 py-16 md:grid-cols-2 md:gap-y-20 md:py-24 lg:grid-cols-4"
      >
        {/* Logo + copyright + socky */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-8 text-center md:items-start md:justify-start md:text-left">
          <BrandLogo />
          <span className="block">
            Copyright © {new Date().getFullYear()} Fotofestplzen.cz
          </span>
          <SocialLinks />
        </div>

        {/* Navigace */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading level={3} size="sm">
            Navigace
          </Heading>
          <ul className="mt-2 space-y-1">
            {mainRoutes.map((route) => (
              <li key={route.label}>
                <Link href={route.path} passHref legacyBehavior>
                  <a className="c-link-3-a text-base font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                    {route.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Další odkazy */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading level={3} size="sm">
            Další odkazy
          </Heading>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/cookies" passHref legacyBehavior>
                <a className="c-link-3-a text-base font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                  Cookies
                </a>
              </Link>
            </li>
            <li>
              <Link href="/gdpr" passHref legacyBehavior>
                <a className="c-link-3-a text-base font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                  Zpracování osobních údajů
                </a>
              </Link>
            </li>
            <li>
              <Link href="/brand" passHref legacyBehavior>
                <a className="c-link-3-a text-base font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                  Grafické podklady
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontakt - Jakub */}
        <div className="col-span-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
          <Heading level={3} size="sm">
            Jakub Flaišman
          </Heading>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href={ctaMenu[1].link}
                className="c-link-3-a text-base font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
              >
                {ctaMenu[1].label}
              </a>
            </li>
            <li>
              <a
                href={ctaMenu[2].link}
                className="c-link-3-a text-base font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70"
              >
                {ctaMenu[2].label}
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>

      {/* Autor webu - podpis */}
      <Wrapper
        size="lg"
        className="flex items-center justify-center border-t border-solid border-body-100 py-10"
      >
        <FooterAuthor />
      </Wrapper>
    </footer>
  );
}
