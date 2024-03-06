import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"


const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="pl-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-16 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner} alt="" />
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-4xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Bienvenidos a CONTRATANDO <span className="text-brandPrimary leading-snug">Haz realidad tus proyectos</span></h1>
            <p className="text-neutralGrey text-base mb-8">Conectando usuarios con profesionales de San Juan</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded-lg hover:bg-neutralDGrey">Registrate</button>
           </div>
          </div>
          <div className="my-16 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner2} alt="" />
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-4xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Profesionales capacitados en <span className="text-brandPrimary leading-snug">CONTRATANDO</span></h1>
            <p className="text-neutralGrey text-base mb-8">A un click de distancia</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded-lg hover:bg-neutralDGrey">Contactanos</button>
           </div>
          </div>
          <div className="my-16 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner3} alt="" />
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-4xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Simplifica tu búsqueda y contratación con  <span className="text-brandPrimary leading-snug">CONTRATANDO</span></h1>
            <p className="text-neutralGrey text-base mb-8">Plataforma segura y gratuita</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded-lg hover:bg-neutralDGrey">Registrate</button>
           </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
