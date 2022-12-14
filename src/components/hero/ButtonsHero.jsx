import React from "react";
import ButtonRent from "./ButtonRent";
import ButttonSell from "./ButttonSell";

const ButtonsHero = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="pb-7 text-center text-base font-bold text-white sm:pb-5 sm:text-2xl">
                ¿Qué estás buscando hoy?
            </h2>
            <div>
                <ButttonSell />
                <ButtonRent />
            </div>
        </div>
    );
};

export default ButtonsHero;
