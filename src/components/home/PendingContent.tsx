import SlideUp from "@components/scroll-reveal/SlideUp";

type Props = {
  headline?: string;
  className?: string;
};

export default function PendingContent({
  headline = "Brzy dostupné...",
  className = "",
}: Props) {
  return (
    <SlideUp
      className={`flex items-center justify-center rounded-2xl bg-secondary/25 py-20 px-6 sm:px-11 lg:py-40 ${className}`}
    >
      <span className="text-center font-display text-2xl font-medium leading-tight text-white sm:text-3xl md:text-4xl">
        {headline}
      </span>
    </SlideUp>
  );
}
