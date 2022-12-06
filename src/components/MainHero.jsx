import React from "react";
import Buscador from "./Buscador";
import ButtonsHero from "./hero/ButtonsHero";
import ImageHero from "./hero/ImageHero";
import MainTextHero from "./hero/MainTextHero";

const MainHero = () => {
    return (
        <>
            <section className="relative h-[520px] w-full sm:h-[725px] lg:h-[calc(100vh-90px)]">
                {/* Container de imagen */}
                <ImageHero />
                {/* Container de texto sobre imagen */}
                <div className="absolute inset-0 z-10 flex flex-col pb-6 sm:pb-14 lg:pb-20">
                    {/* Texto sobre video */}
                    <MainTextHero />
                    {/* Botones Venta y Alquiler */}
                    <ButtonsHero />
                    {/* Buscador */}
                    <Buscador />
                </div>
            </section>
        </>
    );
};

export default MainHero;
