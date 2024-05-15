import Button from "@components/Button";
import Checkbox from "@components/forms/Checkbox";
import Input from "@components/forms/Input";
import Heading from "@components/Heading";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Newsletter() {
  const notifySuccess = () =>
    toast.success("Přihlášení k odběru novinek proběhlo úspěšně", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = () =>
    toast.error("Něco se pokazilo :(", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  // Ref
  const refHoneypot = useRef<HTMLInputElement>(null);

  // State
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
          "template_4fr03xf",
          e.target,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          (result) => {
            e.target.reset();
            notifySuccess();
            setIsLoading(false);
          },
          (error) => {
            notifyError();
            setIsLoading(false);
          }
        );
    } else {
      e.target.reset();
      setIsLoading(false);
    }
  }
  return (
    <div className="grid w-full grid-cols-1 gap-10 rounded-2xl bg-secondary/80 py-20 px-6 sm:px-11 lg:grid-cols-2 lg:py-36">
      <div className="col-span-1">
        <Heading
          level={2}
          size="lg"
          font="display"
          className="uppercase"
          weight="medium"
        >
          Odebírej novinky, ať ti nic neuteče!
        </Heading>
        <p className="mt-6 text-white">
          Chceš mít nejnovější info z festivalu i&nbsp;mimo něj? Přihlas se k
          odběru a dáme ti vědět o programu, hostech a akcích, které
          připravujeme i&nbsp;během roku.
        </p>
      </div>
      <form
        onSubmit={sendEmail}
        aria-label="Odběr novinek"
        className="col-span-1 flex flex-col items-start justify-start gap-5 sm:flex-row"
      >
        <div className="w-full">
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
          <Input
            type="email"
            name="email"
            id="email"
            label="E-mail *"
            isRequired={true}
          />
          <Checkbox
            id="newsletter-gdpr"
            name="newsletter-gdpr"
            label="gdpr"
            isRequired={true}
            className="mt-6"
          >
            * Souhlasím se{" "}
            <Link href={"/gdpr"} passHref legacyBehavior>
              <a className="c-link-3-a text-white outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                zpracováním osobních údajů.
              </a>
            </Link>
          </Checkbox>
        </div>
        <Button
          as="button"
          type="submit"
          text="Odeslat"
          className="w-full sm:w-auto"
          isLoading={isLoading}
        >
          Odebírat
        </Button>
      </form>
    </div>
  );
}
