import Accordion from "@components/Accordion";
import AccordionStack from "@components/AccordionStack";
import SlideUp from "@components/scroll-reveal/SlideUp";

const questionsAnswers = [
  {
    id: 1,
    question: "Jaké je vstupné?",
    answer:
      "Vstupné na festival je zdarma. Některé workshopy mohou být zpoplatněné, jejich cenu a odkaz na zakoupení vstupenky najdete přímo v programu.",
  },
  {
    id: 2,
    question: "Je nutné se na přednášky a workshopy registrovat?",
    answer:
      "Přednášky jsou volně přístupné. U workshopů registrace nutná je. Jejich kapacita je omezena tak, aby se vám lektor mohl věnovat individuálně. Pokud se chcete workshopu zúčastnit, registrujte se.",
  },
  {
    id: 4,
    question: "Kdy a kde bude Foto Fest probíhat?",
    answer: "1. října 2023 od 10 hodin v Plzeňské Papírně.",
  },
  {
    id: 5,
    question: "Bude na místě možnost občerstvení?",
    answer: "Ano, jídlo a pití si můžete zakoupit přímo v prostorách kavárny.",
  },
];

export default function Faq() {
  return (
    <>
      <AccordionStack>
        {questionsAnswers.map((qa) => (
          <SlideUp key={qa.id}>
            <Accordion title={qa.question}>
              <p>{qa.answer}</p>
            </Accordion>
          </SlideUp>
        ))}
      </AccordionStack>
    </>
  );
}
