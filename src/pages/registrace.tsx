import MainHeading from "@components/MainHeading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import type { NextPage } from "next";
// import CountUp from "react-countup";

const RegistrationPage: NextPage = () => {
  return (
    <>
      <Seo title="Program a mapa" description="" noFollow noIndex />
      <Wrapper as={"header"} paddedContent="sm">
        <MainHeading level={2} size="3xl" className="pt-20 md:pt-32">
          Registrace pro firmy
        </MainHeading>
        <div className="grid w-full grid-cols-1 gap-10 py-10 md:grid-cols-2 md:gap-16">
          <p className="text-lg font-medium">
            Ani letošní ročník není pouhou prodejní akcí. Našim cílem je
            propojit komunitu západočeských fotografů a filmařů nejen mezi
            sebou, ale i mezi vámi, prodejci a výrobci vybavení. Během celého
            festivalového dne budete mít možnost prezentovat svoje produkty i
            pracovat s návštěvníky, jak na výstavním stánku, tak během přednášek
            a workshopů, pro které vám dáme prostor.
          </p>
          <p className="text-lg font-medium">
            Na workshopy se letos budeš muset registrovat nebo si na něj
            zakoupit vstupenku, záleží na jaký půjdeš.
          </p>
        </div>
      </Wrapper>

      {/* <Wrapper as={"section"} id="program" paddedContent="sm">
        <CountUp
          start={0}
          end={537}
          delay={0}
          duration={4}
          useEasing
          enableScrollSpy
          scrollSpyOnce
        >
          {({ countUpRef }) => (
            <div className="col-span-1 flex flex-col items-center justify-center gap-1">
              <span
                ref={countUpRef}
                className="block text-4xl font-bold text-primary sm:text-6xl lg:text-8xl"
              />
              <span className="block font-medium uppercase tracking-wider">
                Klientů
              </span>
            </div>
          )}
        </CountUp>
      </Wrapper> */}

      <Wrapper as={"section"} id="program" paddedContent="sm">
        {/* E-mail */}
        {/* Jméno a příjmení */}
        {/* Vystavující firma */}
        {/* Fakturační adresa */}
        {/* Zasílací adresa */}
        {/* IČ */}
        {/* DIČ */}
        {/* Vyřizuje */}
        {/* Telefon */}
        {/* E-mail */}

        {/* Dropdown - Typ účasti */}
        {/* Textarea - Představení společnosti "O nás" */}

        {/* I. Pořadatel
A.T. Shop s.r.o., Borská 75, 316 00 Plzeň, IČ 26374757, DIČ CZ 26374757


II. Vystavovatel
Právnická nebo fyzická osoba, které pořadatel potvrdil účast na festivalu

III. Přihlášení k účasti na veletrhu
- K účasti na veletrhu se lze přihlásit pouze prostřednictvím vyplněné přihlášky, která
se považuje za návrh na uzavření smlouvy.

- Platnou přihláškou se rozumí odeslání tohoto formuláře. 

- Pořadatel rozhoduje o potvrzení nebo odmítnutí přihlášky. 

- Potvrzení přihlášky pořadatel provede elektronicky emailem na adresu vystavovatele. Pořadatel zároveň zašle vystavovateli zálohovou fakturu. 

IV. Cena 
- Cena je stanovena podle zvoleného partnerství.  

- V ceně je zahrnuto: Výstavní plocha 300x200cm, prostor pro reklamní banner za výstavní plochou, umístění roll-upu nebo jiného reklamního nosiče v prostorách festivalu, zveřejnění loga na webových stránkách Foto Festu, představení vystavovatele na webových stránkách a sociálních sítích Foto Festu.

V. Platební a storno podmínky
- Vystavovatel se zavazuje pořadateli zaplatit úplatu za vybrané partnerství na základě potvrzení přihlášky a vystavení zálohové faktury, nejpozději v den splatnosti zálohové faktury. 

- Storno poplatek je stanoven na 100 % zaplacené částky.  */}
      </Wrapper>
    </>
  );
};

export default RegistrationPage;
