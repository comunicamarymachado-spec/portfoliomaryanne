import PortraitJourney from "@/components/PortraitJourney";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pensamento from "@/components/Pensamento";
import Sobre from "@/components/Sobre";
import Trajetoria from "@/components/Trajetoria";
import Contato from "@/components/Contato";
export default function Home() {
  return <><Hero /><Portfolio /><PortraitJourney><Pensamento /><div className="portrait-passage" aria-hidden="true" /><Sobre /></PortraitJourney><Trajetoria /><Contato /></>;
}
