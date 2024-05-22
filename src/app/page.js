import VideoBg from "@/component/videoBg";
import Hero from "@/component/hero";
import HeroL from "@/component/heroL";
import HeroR from "@/component/heroR";
import Steps from "@/component/steps";
import Data from "@/lib/es.json"
import Equipo from "@/component/equipo";
import Especialidades from "@/component/especialidades"

export default function Home() {
  return (
    <>
      <VideoBg 
        titulo={Data.home.titulo} 
        nombre={Data.home.nombre} 
        desc={Data.home.desc} 
        button={Data.home.button} />
        <Especialidades/>
        <Hero hidden={false} titulo={Data.home.hero.titulo} desc={Data.home.hero.desc}/>
        <HeroL/>
        <HeroR/>
        <Steps/>
        <Equipo/>

    </>
  );
}
