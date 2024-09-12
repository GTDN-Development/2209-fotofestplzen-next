import Heading from "@components/Heading";
import ProgramCard from "./ProgramCard";
import { cafe, mainStage, outdoor1, outdoor2 } from "./programData";

type Props = {
  className?: string;
  hasBackground?: boolean;
};

export default function ProgramDesktop({
  className = "",
  hasBackground = true,
}: Props) {
  return (
    <div
      className={`relative hidden lg:flex lg:flex-col lg:gap-6 xl:gap-10 ${className}`}
    >
      {/* Efekt v pozadí */}
      {hasBackground && (
        <div className="pointer-events-none absolute -top-14 -z-10 h-screen w-screen bg-gradient-to-tr from-body via-body to-secondary opacity-30 lg:h-[1200px]"></div>
      )}

      {/* Nadpisy */}
      <div className="grid grid-cols-4 gap-10">
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Horní stage
          </Heading>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Kavárna
          </Heading>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Workshop zóna
          </Heading>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <Heading
            level={3}
            size="lg"
            font="display"
            color="primary"
            weight="medium"
          >
            Meeting point
          </Heading>
        </div>
      </div>

      {/* Program */}
      <div className="grid grid-cols-4 items-start lg:gap-6 xl:gap-10">
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {mainStage.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                price={item.price}
                isFull={item.isFull}
                shopLink={item.shopLink}
                optionalMessage={item.optionalMessage}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {cafe.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                price={item.price}
                isFull={item.isFull}
                shopLink={item.shopLink}
                optionalMessage={item.optionalMessage}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {outdoor1.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                price={item.price}
                isFull={item.isFull}
                shopLink={item.shopLink}
                optionalMessage={item.optionalMessage}
              />
            ))}
          </ul>
        </div>
        <div className="w-full bg-gray-700/50 p-6">
          <ul className="flex w-full flex-col divide-y divide-gray-600/80">
            {outdoor2.map((item) => (
              <ProgramCard
                key={item.id}
                speaker={item.speaker}
                category={item.category}
                name={item.name}
                time={item.time}
                hasRegistration={item.hasRegistration}
                isPaid={item.isPaid}
                price={item.price}
                isFull={item.isFull}
                shopLink={item.shopLink}
                optionalMessage={item.optionalMessage}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
