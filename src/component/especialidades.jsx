import Image from "next/image";
import Link from "next/link";

const especialidades = () => {
  return (
    <>
      <section className="body-font mt-10 container">
        <div className="lg:w-full px-5 py-4 mx-auto">
          <div className="flex flex-wrap w-full mb-5 p-5 rounded-lg">
            <div className="lg:w-1/4 mr-5 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl font-georgia text-2xl font-bold title-font mb-2 text-black">
                Especialidades
              </h1>
              <div className="h-1 w-20 bg-green-400 rounded"></div>
            </div>
            <p className="lg:w-2/3 leading-relaxed text-black">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos; heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-pixabay-159832.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                <Link href='/'>Reed more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Comercial cabinetry
                </h2>
                <p className="leading-relaxed text-base text-black">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-pavel-danilyuk-8112152.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                <Link href='/'>Reed more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Tile
                </h2>
                <p className="leading-relaxed text-base text-black ">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg">
                <Image
                  width={500}
                  height={500}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/pexels-matthiaszomer-618158.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-600 text-s font-medium title-font">
                  <Link href='/'>Reed more...</Link>
                </h3>
                <h2 className="text-lg font-georgia text-black font-medium title-font mb-4">
                  Carpentry
                </h2>
                <p className="leading-relaxed text-base text-black ">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default especialidades;
