import Heading from "@components/Heading";

type Props = {
  speaker: string;
  category: string;
  name: string;
  time: string;
  hasRegistration: boolean;
  isPaid: boolean;
  isFull: boolean;
  shopLink: string;
  className?: string;
};

export default function ProgramCard({
  speaker,
  category,
  name,
  time,
  hasRegistration,
  isPaid,
  isFull,
  shopLink,
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
      {/* Při vydaném programu - během festivalu */}
      {hasRegistration ? (
        <span className="block text-center text-warning">
          Přístupné pouze registrovaným
        </span>
      ) : (
        <span className="block text-center text-info">Volně přístupné</span>
      )}

      {/* Při spuetěných registracích v programu */}
      {/* {hasRegistration && !isPaid && !isFull && <RegistrationModal />}
      {hasRegistration && isPaid && !isFull && (
        <a
          href={shopLink}
          target="blank"
          className="c-link-3-a text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary"
        >
          Koupit vstupenku
        </a>
      )}
      {isFull && (
        <span className="block text-center text-error">
          Kapacita naplněna - již se nelze registrovat
        </span>
      )}
      {!hasRegistration && !isPaid && (
        <span className="block text-center text-info">Volně přístupné</span>
      )} */}
    </li>
  );
}
