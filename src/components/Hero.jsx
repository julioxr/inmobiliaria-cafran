import React from "react";
import Buscador from "./Buscador";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-[520px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://img.freepik.com/fotos-premium/hogar-contemporaneo-patio-visto-patio_19485-33697.jpg?w=1380"
                        className="w-full h-full object-cover brightness-50 "
                    />
                </div>
                {/* Texto sobre video */}
                <div className="absolute inset-0 z-10">
                    <div className="h-[400px] flex flex-col justify-between pt-14 px-8 ">
                        <div>
                            <h1 className="font-bold text-[27px] text-white w-64 leading-8 pb-2">
                                Una oportunidad para crecer
                            </h1>
                            <p className="text-sm text-white">
                                Hace realidad tu proyecto
                            </p>
                        </div>
                        <h2 className="text-base text-white text-center pb-6">
                            ¿Qué estás buscando hoy?
                        </h2>
                    </div>
                    {/* Botones Venta y Alquiler */}
                    <div className="flex justify-center">
                        <button className="w-[150px] h-[53px] rounded-tl rounded-bl text-base bg-black text-white">
                            Venta
                        </button>
                        <button className="w-[150px] h-[53px] rounded-tr rounded-br text-base bg-cafranGray-semiDark text-white">
                            Alquiler
                        </button>
                    </div>
                    {/* Buscador */}
                    <Buscador className />
                </div>
            </section>
        </>
    );
};

export default Hero;
