import Alert from "@components/Alert";
import Button from "@components/Button";
import Checkbox from "@components/forms/Checkbox";
import Input from "@components/forms/Input";
import Select from "@components/forms/Select";
import Textarea from "@components/forms/Textarea";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { mainStage, outdoor1, outdoor2 } from "./programData";

type Props = {
  className?: string;
};

const workshops = [
  {
    id: 1,
    value: "F22 - Michal Houdek - Fotíme motorku prakticky",
  },
  {
    id: 2,
    value: "Tamron - Lukáš Szwejdar - Glamour fotografie",
  },
  {
    id: 3,
    value: "Nikon - Photowalk s Nikonem",
  },
  {
    id: 4,
    value: "Peakdesign - You and me",
  },
  {
    id: 5,
    value: "Manfrotto - Lukáš Navara - Portréty",
  },
  {
    id: 6,
    value: "Dominik Beránek - Street portrét",
  },
  {
    id: 7,
    value: "Tomáš Košňar + Leica klub - Focení na film",
  },
];

export default function RegistrationForm({ className = "" }: Props) {
  // Ref
  const refHoneypot = useRef<HTMLInputElement>(null);

  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e: any) {
    e.preventDefault();
    setIsLoading(true);

    var honeypot = refHoneypot.current?.value;

    if (honeypot === "" || honeypot === null) {
      emailjs
        .sendForm(
          "service_0kuce38",
          "template_2xekuv6",
          e.target,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          (result) => {
            setmailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          (error) => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setmailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  }

  // Filter only workshops from mainStage array of objects
  const mainStageWorkshops = mainStage.filter(
    (item) => item.category === "Workshop"
  );

  return (
    <form
      className={`flex flex-col items-start gap-y-6 ${className}`}
      aria-label="Registrační formulář na workshopy"
      onSubmit={sendEmail}
    >
      <Input
        type="text"
        name="name"
        id="name"
        label="Jméno a příjmení *"
        isRequired={true}
      />

      {/* Honeypot - anti spam */}
      <div className="lib-input-hp">
        <input
          type="text"
          placeholder="surname"
          id="surname"
          ref={refHoneypot}
        />
        <label htmlFor="website">Příjmení</label>
      </div>
      {/* ---- Honeypot - anti spam ---- */}

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          type="email"
          name="email"
          id="email"
          label="E-mail *"
          isRequired={true}
          className="col-span-1"
        />
        <Input
          type="tel"
          name="phone"
          id="phone"
          label="Telefon *"
          isRequired={true}
          className="col-span-1"
        />
      </div>

      <Select
        label="Vyberte workshop"
        id="workshop"
        name="workshop"
        isRequired={true}
      >
        <option value={""}>Vyberte jednu z možností *</option>
        {mainStageWorkshops.map((workshop, i) => (
          <Fragment key={i}>
            <option
              disabled={workshop.isFull}
              className=" disabled:opacity-50"
              value={`${
                workshop.speaker +
                " - " +
                workshop.name +
                (workshop.isPaid ? " - " + workshop.price : "") +
                (workshop.isFull ? " - " + "Kapacita naplněna" : "")
              }`}
            >
              {`${
                workshop.speaker +
                " - " +
                workshop.name +
                (workshop.isPaid ? " - " + workshop.price : "") +
                (workshop.isFull ? " - " + "Kapacita naplněna" : "")
              }`}
            </option>
          </Fragment>
        ))}
        {outdoor1.map((workshop, i) => (
          <Fragment key={i}>
            <option
              disabled={workshop.isFull}
              className=" disabled:opacity-50"
              value={`${
                workshop.speaker +
                " - " +
                workshop.name +
                (workshop.isPaid ? " - " + workshop.price : "") +
                (workshop.isFull ? " - " + "Kapacita naplněna" : "")
              }`}
            >
              {`${
                workshop.speaker +
                " - " +
                workshop.name +
                (workshop.isPaid ? " - " + workshop.price : "") +
                (workshop.isFull ? " - " + "Kapacita naplněna" : "")
              }`}
            </option>
          </Fragment>
        ))}
        {outdoor2.map((workshop, i) => (
          <Fragment key={i}>
            <option
              disabled={workshop.isFull}
              className=" disabled:opacity-50"
              value={`${
                workshop.speaker +
                " - " +
                workshop.name +
                (workshop.isPaid ? " - " + workshop.price : "") +
                (workshop.isFull ? " - " + "Kapacita naplněna" : "")
              }`}
            >
              {`${
                workshop.speaker +
                " - " +
                workshop.name +
                (workshop.isPaid ? " - " + workshop.price : "") +
                (workshop.isFull ? " - " + "Kapacita naplněna" : "")
              }`}
            </option>
          </Fragment>
        ))}
      </Select>

      <Textarea
        name="message"
        id="message"
        cols={30}
        rows={6}
        label="Poznámka k registraci"
        isRequired={false}
      />

      <Checkbox
        id="registration-gdpr"
        name="registration-gdpr"
        label="gdpr"
        isRequired={true}
      >
        * Souhlasím se{" "}
        <Link href={"/gdpr"} passHref legacyBehavior>
          <a className="c-link-3-a text-primary outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
            zpracováním osobních údajů.
          </a>
        </Link>
      </Checkbox>

      <Button
        as="button"
        type="submit"
        text="Odeslat"
        className="w-full sm:w-auto"
        isLoading={isLoading}
        rightIcon={<HiArrowRight />}
      >
        Odeslat registraci
      </Button>

      <div className="w-full">
        {mailSent ? (
          <Alert
            variant="filled"
            status="success"
            isDismissable={true}
            hasIcon={true}
            title="Registrace byla odeslána"
            text="Tvoje registrace na workshop proběhla úspěšně. Její platnost ti ještě potvrdíme e-mailem. Děkujeme."
            className="my-6"
          />
        ) : null}
        {formError ? (
          <Alert
            variant="filled"
            status="error"
            isDismissable={true}
            hasIcon={true}
            title="Něco se pokazilo"
            text="Je nám líto, ale tvojí registraci se nepodařilo odeslat. Zkus to znovu později nebo využij jinou možnost kontaktu."
            className="my-6"
          />
        ) : null}
      </div>
    </form>
  );
}
