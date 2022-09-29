import { Tab } from "@headlessui/react";
import {
  HiOutlineCamera,
  HiOutlineLightningBolt,
  HiOutlineVideoCamera,
} from "react-icons/hi/index.js";
import GuestCard from "./GuestCard";

type Props = {
  className?: string;
};

export default function Guests({ className = "" }: Props) {
  return (
    <Tab.Group
      as="div"
      className={`overflow-visible lg:flex lg:gap-10 ${className}`}
    >
      <Tab.List
        className={
          "flex w-auto gap-5 overflow-x-auto px-1 py-4 lg:shrink-0 lg:flex-col lg:gap-10 lg:p-0"
        }
      >
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left outline-none transition-colors duration-200"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30"
          }
        >
          <HiOutlineCamera className="text-3xl text-primary lg:text-4xl" />
          <span className="text-2xl font-bold">Fotka</span>
          <span className="text-sm">
            Hosté od pozvaných značek, ale i námi vybraní odborníci s různými
            tématy.{" "}
          </span>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left outline-none transition-colors duration-200"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30"
          }
        >
          <HiOutlineVideoCamera className="text-3xl text-primary lg:text-4xl" />
          <span className="text-2xl font-bold">Video</span>
          <span className="text-sm">
            Natáčet se dá opravdu z mnoha úhlů, i podle toho jsme vybírali
            zástupce z oblasti videa.
          </span>
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "flex w-64 shrink-0 flex-col gap-3 bg-gray-700/50 p-5 text-left outline-none transition-colors duration-200"
              : "flex w-64 shrink-0 flex-col gap-3 bg-transparent p-5 text-left outline-none transition-colors duration-200 hover:bg-gray-700/30"
          }
        >
          <HiOutlineLightningBolt className="text-3xl text-primary lg:text-4xl" />
          <span className="text-2xl font-bold">Ostatní</span>
          <span className="text-sm">
            Jsou věci co jsou s fotkou a videem neodmyslitelně spjaty, avšak
            nejdou zařadit ani k jednomu z nich.
          </span>
        </Tab>
      </Tab.List>
      <Tab.Panels className={"w-full py-10 lg:py-0 lg:px-5"}>
        <Tab.Panel
          className={
            "grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:grid-cols-3"
          }
        >
          <GuestCard
            src={"/images/hoste/fotka/milos-nejezchleb.jpg"}
            alt="Miloš Nejezchleb"
            name="Miloš Nejezchleb"
            caption="Miloš Nejezchleb je oceňovaný fotograf žijící v Česku, jehož práce často zkoumají sociální témata a lidské příběhy"
            igLink={"https://www.instagram.com/nejmil/"}
            igName={"nejmil"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/fotka/jiri-lizler.jpg"}
            alt="Jiří Lízler"
            name="Jiří Lízler"
            caption="Komerční fotograf specializující se na fotografování luxusních hotelů, resortů a špičkových obytných interiérů"
            igLink={"https://www.instagram.com/jirilizler/"}
            igName={"jirilizler"}
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/fotka/sony-jan-tichy.jpg"}
            alt="Sony - Jan Tichý"
            name="Sony - Jan Tichý"
            caption="Honza Tichý je profesionální fotograf, lektor a ambasador značky Sony. Věnuje se převážně fotografování svateb, ale v jeho tvorbě se často objevují lidé, běžný život a architektura"
            igLink={"https://www.instagram.com/jan_tichy_photography/"}
            igName={"jan_tichy_photography"}
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/fotka/f22-michal-houdek.jpg"}
            alt="F22 - Michal Houdek"
            name="F22 - Michal Houdek"
            caption="Komerční fotograf zaměřující se na fotografování aut a motorek"
            igLink={"https://www.instagram.com/michalsbikes/"}
            igName={"michalsbikes"}
            className="xs:reveal-delay-100 xl:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/fotka/tamron-lukas-szwejdar.jpg"}
            alt="Tamron - Lukáš Szwejdar"
            name="Tamron - Lukáš Szwejdar"
            caption="Fashion a lifestyle fotograf, tvůrce podcastu Shooting time a ambasator Tamronu"
            igLink={"https://www.instagram.com/grizzly_the_photographer/"}
            igName={"grizzly_the_photographer"}
            className="xs:reveal-delay-0 xl:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/fotka/canon-michal-tvrdik.jpg"}
            alt="Canon - Michal Tvrdík"
            name="Canon - Michal Tvrdík"
            caption="Rodilý Pražan nejčastěji fotící reportáže a různé eventy, který si ale občas odskočí i k jinému žánru"
            igLink={"https://www.instagram.com/fotograf.michal.tvrdik/"}
            igName={"fotograf.michal.tvrdik"}
            className="xs:reveal-delay-100 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/fotka/canon-oldrich-drnec.jpg"}
            alt="Canon - Oldřich Drnec"
            name="Canon - Oldřich Drnec"
            caption="Profesionální fotograf od roku 2005. Věnuje se především reklamní, reportážní a sportovní fotografii"
            igLink={"https://www.instagram.com/oldrichdrnec/"}
            igName={"oldrichdrnec"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/fotka/nikon-jmeno-nemame.jpg"}
            alt="Nikon - Filip Barták"
            name="Nikon - Filip Barták"
            caption="Filip Barták je technickým specialistou ve firmě Nikon. Mezi jeho oblíbené fotografické žánry patří makrofotografie, sportovní fotografie, produktová a ateliérová tvorba"
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/fotka/petr-dudek.jpg"}
            alt="Petr Dudek"
            name="Petr Dudek"
            caption="Svatební a koncertní fotograf, zaměřující se i na BTS fotky videoklipů, street a lifestyle fotku"
            igLink={"https://www.instagram.com/peterhoopoe/"}
            igName={"peterhoopoe"}
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/fotka/mayhem-pictures-zbynek-mach.jpg"}
            alt="Mayhem pictures - Zbyněk Mach"
            name="Mayhem pictures - Zbyněk Mach"
            caption="Hobby automotive fotograf"
            igLink={"https://www.instagram.com/mayhem_pictures/"}
            igName={"mayhem_pictures"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/fotka/milan-risky.jpg"}
            alt="Milan Říský"
            name="Milan Říský"
            caption="Koncertní fotograf"
            igLink={"https://www.instagram.com/milanriskyfotograf/"}
            igName={"milanriskyfotograf"}
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/fotka/tereza-vaclavova.jpg"}
            alt="Tereza Václavová"
            name="Tereza Václavová"
            caption="Svatební, rodinná a portrétní fotografka"
            igLink={"https://www.instagram.com/tereza_vaclavova/"}
            igName={"tereza_vaclavova"}
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/fotka/radek-karko.jpg"}
            alt="Radek Karko"
            name="Radek Karko"
            caption="Cestovatel, komerční a dokumentární filmař, wildlife fotograf"
            igLink={"https://www.instagram.com/karkys/"}
            igName={"karkys"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/fotka/manfrotto-lukas-navara.jpg"}
            alt="Manfrotto - Lukáš Navara"
            name="Manfrotto - Lukáš Navara"
            caption="Svatební, reklamní a módní fotograf"
            igLink={"https://www.instagram.com/navarafoto.cz/"}
            igName={"navarafoto.cz"}
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/fotka/dominik-beranek.jpg"}
            alt="Dominik Beránek"
            name="Dominik Beránek"
            caption="Street a lifestyle fotograf"
            igLink={"https://www.instagram.com/domeses/"}
            igName={"domeses"}
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/fotka/leica-tomas-kosnar.jpg"}
            alt="Tomáš Košňar"
            name="Tomáš Košňar"
            caption="Lifestyle fotograf zaměřující se na analog"
            igLink={"https://www.instagram.com/trash_kos/"}
            igName={"trash_kos"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/fotka/peakdesign-younme-jakub-manina.jpg"}
            alt="Peak Design - You'N'Me hub"
            name="Peak Design - You'N'Me hub"
            caption="Mladý fotografický pár"
            igLink={"https://www.instagram.com/younmehub/"}
            igName={"younmehub"}
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/fotka/canon-pavel-sery.jpg"}
            alt="Pavel Šerý"
            name="Pavel Šerý"
            caption="Plzeňák, kanoňák který přes dvacet let působí jako produktový specialista foto-video ve společnosti Canon CZ"
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
        </Tab.Panel>
        <Tab.Panel
          className={
            "grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:grid-cols-3"
          }
        >
          <GuestCard
            src={"/images/hoste/video/sony-david-kasparek.jpg"}
            alt="Sony - David Kašpárek"
            name="Sony - David Kašpárek"
            caption="Filmař, komerční fotograf a digitální tvůrce"
            igLink={"https://www.instagram.com/kasparek_/"}
            igName={"kasparek_"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/video/fullface-martin-vrbicky.jpg"}
            alt="Fullface Productions - Martin Vrbický"
            name="Fullface Productions - Martin Vrbický"
            caption="DOP a režisér ve FullFace production, cestovatel"
            igLink={"https://www.instagram.com/martin.vrbicky/"}
            igName={"martin.vrbicky"}
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/video/fullface-stepan-romanov.jpg"}
            alt="Fullface Productions - Štěpán Romanov"
            name="Fullface Productions - Štěpán Romanov"
            caption="Producent ve FullFace production"
            igLink={"https://www.instagram.com/stepanrmnv/"}
            igName={"stepanrmnv"}
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/video/vojtech-pollak.jpg"}
            alt="Vojtěch Pollák"
            name="Vojtěch Pollák"
            caption="Videomaker, FPV/DRONE pilot"
            igLink={"https://www.instagram.com/vojtechpollak/"}
            igName={"vojtechpollak"}
            className="xs:reveal-delay-100 xl:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/video/radek-karko.jpg"}
            alt="Radek Karko"
            name="Radek Karko"
            caption="Cestovatel, komerční a dokumentární filmař, wildlife fotograf"
            igLink={"https://www.instagram.com/karkys/"}
            igName={"karkys"}
            className="xs:reveal-delay-0 xl:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/video/martin-koudelka.jpg"}
            alt="Martin Koudela"
            name="Martin Koudela"
            caption="Tvůrce zaměřující se na tvorbu dlouhodobých časosběrů"
            igLink={"https://instagram.com/mkoudela/"}
            igName={"mkoudela"}
            className="xs:reveal-delay-100 xl:reveal-delay-200"
          />
        </Tab.Panel>
        <Tab.Panel
          className={
            "grid grid-cols-1 gap-x-6 gap-y-10 xs:grid-cols-2 md:gap-x-12 md:gap-y-20 xl:grid-cols-3"
          }
        >
          <GuestCard
            src={"/images/hoste/ostatni/kvalitni-fotky-petr-komarek.jpg"}
            alt="Kvalitní fotky - Petr Komárek"
            name="Kvalitní fotky - Petr Komárek"
            caption="Fotograf a člověk, který vám o tisku fotografií řekne úplně vše"
            igLink={"https://www.instagram.com/petrkomarek/"}
            igName={"petrkomarek"}
            className="xs:reveal-delay-0"
          />
          <GuestCard
            src={"/images/hoste/ostatni/manfrotto-jakub-stejskal.jpg"}
            alt="Manfrotto - Jakub Stejskal"
            name="Manfrotto - Jakub Stejskal"
            caption="Majitel společnosti Stedis"
            className="xs:reveal-delay-100"
          />
          <GuestCard
            src={"/images/hoste/ostatni/manfrotto-lukas-navara.jpg"}
            alt="Manfrotto - Lukáš Navara"
            name="Manfrotto - Lukáš Navara"
            caption="Svatební, reklamní a módní fotograf"
            igLink={"https://www.instagram.com/navarafoto.cz/"}
            igName={"navarafoto.cz"}
            className="xs:reveal-delay-0 xl:reveal-delay-200"
          />
          <GuestCard
            src={"/images/hoste/ostatni/viewsonic.jpg"}
            alt="Viewsonic"
            name="Viewsonic"
            caption="Výrobce monitorů"
            igLink={"https://instagram.com/viewsonic.uk/"}
            igName={"viewsonic.uk"}
            className="xs:reveal-delay-100 xl:reveal-delay-0"
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
