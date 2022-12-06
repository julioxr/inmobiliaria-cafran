import React from "react";
import Buscador from "./Buscador";
import casa1 from "../assets/img/casa1.jpg";

const Hero = () => {
    return (
        <>
            <section className="relative h-[520px] w-full lg:h-[calc(100vh-90px)]">
                {/* Container de imagen */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={casa1}
                        className="h-full w-full object-cover brightness-50 "
                    />
                </div>
                {/* Container de texto sobre imagen */}
                <div className="absolute inset-0 z-10 flex flex-col pb-20">
                    {/* Texto sobre video */}
                    <div className="mb-auto px-8 pt-14 lg:px-32 lg:pt-28 ">
                        <div>
                            <h1 className="w-64 pb-2 text-[27px] font-bold leading-8 text-white  lg:w-[498px] lg:text-[60px] lg:leading-[72px]">
                                Una oportunidad para crecer
                            </h1>
                            <p className="text-[13px] text-white lg:text-xl lg:font-semibold lg:leading-[24px]">
                                Hace realidad tu proyecto
                            </p>
                        </div>
                    </div>
                    {/* Botones Venta y Alquiler */}

                    <div className="flex flex-col items-center justify-center">
                        <h2 className="pb-6 text-center text-base font-bold text-white lg:text-2xl">
                            ¿Qué estás buscando hoy?
                        </h2>
                        <div>
                            <button className="h-[53px] w-[150px] rounded-tl rounded-bl  bg-black text-base text-white lg:h-[50px] lg:w-[211px] lg:text-[18px] lg:font-medium">
                                Vender
                            </button>
                            <button className="h-[53px] w-[150px] rounded-tr rounded-br bg-cafranGray-semiDark text-base text-white lg:h-[50px] lg:w-[211px] lg:text-[18px] lg:font-medium">
                                Alquilar
                            </button>
                        </div>
                    </div>
                    {/* Buscador */}
                    <Buscador />
                </div>
            </section>
        </>
    );
};

export default Hero;
