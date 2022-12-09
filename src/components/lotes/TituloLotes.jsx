import React from "react";

const TituloLotes = () => {
    return (
        <>
            <div
                className="flex h-16 items-center gap-5 bg-red-300 px-8 md:col-span-4 md:h-auto
            md:flex-col"
            >
                <h2 className="text-[34px] font-bold text-cafranGray-semiDark md:text-[40px]">
                    Lotes
                </h2>
                <div className="h-16 border-r-2 border-solid border-cafranGray-semilight/50 md:hidden"></div>
                <p className="w-[135px] text-[13px] leading-4 text-cafranGray-dark sm:w-[261px] md:text-sm lg:text-base ">
                    Encontrá el lugar ideal para tu vivienda permanente o de fin
                    de semana.
                </p>
                <div className="mt-6 hidden border-b-2 border-solid border-cafranGray-semilight/50"></div>
            </div>
        </>
    );
};

export default TituloLotes;
