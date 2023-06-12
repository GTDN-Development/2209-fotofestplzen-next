import Heading from "@components/Heading";
import SlideUp from "@components/scroll-reveal/SlideUp";
// import Image from "next/image";
// import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

type Props = {
  src?: string;
  alt?: string;
  name?: string;
  caption?: string;
  igLink?: string | null;
  igName?: string | null;
  className?: string;
};

export default function GuestCard({
  src = "/images/conf.jpg",
  alt = "lorem ipsum",
  name = "Jméno a příjmení",
  caption = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  igLink = null,
  igName = null,
  className = "",
}: Props) {
  return (
    <SlideUp
      as={"div"}
      className={`col-span-1 flex flex-col gap-4 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="aspect-square bg-gray-800 object-cover"
        loading="lazy"
      />
      <Heading size="sm" level={3}>
        {name}
      </Heading>
      <p className="text-sm">{caption}.</p>
      {igLink !== null && igName !== null && (
        <a
          href={igLink}
          target={"_blank"}
          rel="noreferrer"
          className="c-link-3-a flex items-center gap-2 text-xs text-primary sm:text-sm lg:text-base"
        >
          <FaInstagram />
          <span>{igName}</span>
        </a>
      )}
    </SlideUp>
  );
}
