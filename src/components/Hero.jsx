import React from "react";
import Buscador from "./Buscador";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-[520px]">
                {/* Container de imagen */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="w-full h-full object-cover brightness-50 "
                    />
                </div>
                {/* Container de texto sobre imagen */}
                <div className="absolute inset-0 z-10">
                    {/* Texto sobre video */}
                    <div className="h-[380px] flex flex-col justify-between pt-14 px-8 ">
                        <div>
                            <h1 className="font-bold text-[27px] text-white w-64 leading-8 pb-2">
                                Una oportunidad para crecer
                            </h1>
                            <p className="text-[13px] text-white">
                                Hace realidad tu proyecto
                            </p>
                        </div>
                        <h2 className="text-base text-white font-bold text-center pb-6">
                            ¿Qué estás buscando hoy?
                        </h2>
                    </div>
                    {/* Botones Venta y Alquiler */}
                    <div className="flex justify-center">
                        <button className="w-[150px] h-[53px] rounded-tl rounded-bl text-base bg-black text-white">
                            Vender
                        </button>
                        <button className="w-[150px] h-[53px] rounded-tr rounded-br text-base bg-cafranGray-semiDark text-white">
                            Alquilar
                        </button>
                    </div>
                    {/* Buscador */}
                    <Buscador />
                </div>
            </section>
        </>
    );
};

export default Hero;
