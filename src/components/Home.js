import React from "react";
import Carousel from "./Carousel";

function Home() {
  return (
    <div>
      <h1 className="mb-4 text-center">Bem-vindo à Escolinha de Skate do Bob!</h1>
      <Carousel />
      <p className="mt-4">
        Nossa escola é uma ONG filantrópica que oferece aulas gratuitas de skate para jovens da comunidade. Venha fazer parte dessa jornada!
      </p>
    </div>
  );
}

export default Home;
