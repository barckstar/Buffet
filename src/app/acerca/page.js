import Image from "next/image";
import Hero from "@/component/hero";
import HeroL from "@/component/heroL";
import HeroR from "@/component/heroR";
import Fillnav from "@/component/fillNav"
import Data from "@/lib/es.json"

export default function Acerca() {

  return (
    <>
        <Fillnav/>
        <Hero hidden={true} titulo={Data.acerca.hero.titulo} desc={Data.acerca.hero.desc}/>
        <HeroL />
        <HeroR/>
    </>
  );
}
