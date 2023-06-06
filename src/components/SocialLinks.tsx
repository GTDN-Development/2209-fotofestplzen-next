import { socials } from "@configs/socials";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-10">
        {socials.map((social) => (
          <li key={social.link}>
            <a
              href={social.link}
              aria-label={social.ariaLabel}
              target="blank"
              rel="noopener noreferrer"
              className="text-xl text-white transition-colors duration-150 ease-in-out hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </Tag>
  );
}
