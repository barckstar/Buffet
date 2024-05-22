import Image from "next/image";

const VideoBg = ({titulo, nombre, desc, button}) => {
  return (
    <>
    <section>
      <div className="video-container mt-0">
        <video autoPlay muted loop>
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          <div className="hero-content">
            <h1 className="hero-title">{titulo}</h1>
            <Image
              className="img mb-5"
              src="/vercel.svg"
              width={500}
              height={500}
              alt="Logo"
            />
            <h1 className="hero-title-logo">{nombre}</h1>
            <p className="hero-description">
              {desc}
            </p>
            <button className="hero-button">
              {button}
            </button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default VideoBg;
