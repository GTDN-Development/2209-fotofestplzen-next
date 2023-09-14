import { mainRoutes } from "@configs/routes";
import Link from "next/link";

type NavbarMainLinksOptions = {
  className?: string;
};

export default function NavbarMainLinks({
  className = "",
}: NavbarMainLinksOptions) {
  return (
    <ul
      className={`list-none space-x-3 xl:space-x-7 2xl:space-x-12 ${className}`}
    >
      {mainRoutes.map((route) => (
        <li key={route.label}>
          <Link href={route.path} passHref legacyBehavior>
            <a className="c-link-3-a text-xs font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70 xl:text-base">
              {route.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
