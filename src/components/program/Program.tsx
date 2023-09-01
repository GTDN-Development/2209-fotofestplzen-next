import Heading from "@components/Heading";
import { Tab } from "@headlessui/react";
import ProgramCard from "./ProgramCard";
import { cafe, mainStage, outdoor1, outdoor2 } from "./programData";

type Props = {
  className?: string;
};

const stagesTabs = [
  {
    id: 1,
    headline: "Hlavní stage",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
  {
    id: 2,
    headline: "Kavárna",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
  {
    id: 3,
    headline: "Venkovní stage 1",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
  {
    id: 4,
    headline: "Venkovní stage 2",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,dolorum.",
  },
];

export default function Program({ className = "" }: Props) {
  return (
    <Tab.Group
      as="div"
      className={`overflow-visible sm:flex sm:gap-5 md:gap-10 lg:hidden ${className}`}
    >
      <Tab.List
        className={
          "flex w-auto gap-2 overflow-x-auto px-1 py-4 sm:w-full sm:flex-1 sm:shrink-0 sm:flex-col sm:gap-5 sm:p-0"
        }
      >
        {stagesTabs.map((stage) => (
          <Tab
            key={stage.id}
            className={({ selected }) =>
              selected
                ? "flex w-48 shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-gray-700/60 p-3 text-left outline-none transition-colors duration-200 sm:w-full sm:items-start sm:justify-start sm:p-5"
                : "flex w-48 shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-transparent p-3 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30 sm:w-full sm:items-start sm:justify-start sm:p-5"
            }
          >
            <Heading
              level={3}
              size="base"
              font="display"
              color="primary"
              weight="medium"
              className="text-center sm:text-left"
            >
              {stage.headline}
            </Heading>
            {/* <p className="text-sm">{stage.caption}</p> */}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className={"py-10 sm:w-full sm:flex-1 sm:py-0 sm:px-5"}>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
                isFull={item.isFull}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </Tab.Panel>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
                isFull={item.isFull}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </Tab.Panel>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
                isFull={item.isFull}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </Tab.Panel>
        <Tab.Panel className={"w-full bg-gray-700/50 p-6"}>
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
                isFull={item.isFull}
                shopLink={item.shopLink}
              />
            ))}
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
