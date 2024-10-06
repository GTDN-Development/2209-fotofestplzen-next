import Heading from "@components/Heading";
import RegistrationModal from "./RegistrationModal";

type Props = {
  speaker: string;
  category: string;
  name: string;
  time: string;
  hasRegistration: boolean;
  isPaid: boolean;
  price?: string;
  isFull: boolean;
  shopLink: string;
  optionalMessage?: string;
  className?: string;
};

export default function ProgramCard({
  speaker,
  category,
  name,
  time,
  hasRegistration,
  isPaid,
  price,
  isFull,
  shopLink,
  optionalMessage,
  className = "",
}: Props) {
  return (
    <li className={`flex w-full flex-col items-center gap-3 py-8 ${className}`}>
      <Heading level={4} size="sm" align="center">
        {speaker}
      </Heading>
      <span className="text-center text-sm leading-tight tracking-widest text-gray-400">
        {category}
      </span>
      <span className="text-center text-lg leading-tight text-white">
        {name}
      </span>
      <span className="text-center text-lg leading-tight tracking-widest text-gray-400">
        {time}
      </span>
      {optionalMessage && (
        <span className="block text-center text-warning">
          {optionalMessage}
        </span>
      )}
      {/* Při vydaném programu - během festivalu */}
      {/* {hasRegistration ? (
        <span className="block text-center text-warning">
          Registrace dostupná již brzy
        </span>
      ) : (
        <span className="block text-center text-info">Volně přístupné</span>
      )} */}
      {/* Při spuetěných registracích v programu */}
      {hasRegistration && !isPaid && !isFull && <RegistrationModal />}
      {hasRegistration && isPaid && !isFull && (
        <RegistrationModal price={price} />
      )}
      {/* {hasRegistration && (
        <span className="block text-center text-emerald-600">
          Registrace budou spuštěny <br /> 19. 9. ve 20:00
        </span>
      )} */}
      {/* {hasRegistration && isPaid && !isFull && (
        <a
          href={shopLink}
          target="blank"
          className="c-link-3-a text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary"
        >
          Koupit vstupenku
        </a>
      )} */}
      {isFull && (
        <span className="block text-center text-error">
          {/* Kapacita naplněna - již se nelze registrovat */}
          Registrace uzavřeny
        </span>
      )}
      {!hasRegistration && !isPaid && (
        <span className="block text-center text-info">Volně přístupné</span>
      )}
    </li>
  );
}
