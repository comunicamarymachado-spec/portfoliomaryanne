import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Trajetoria from "@/components/Trajetoria";
import Sobre from "@/components/Sobre";
import Contato from "@/components/Contato";
import TideDivider from "@/components/TideDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <TideDivider />
      <Portfolio />
      <TideDivider />
      <Trajetoria />
      <TideDivider />
      <Sobre />
      <TideDivider />
      <Contato />
    </>
  );
}
