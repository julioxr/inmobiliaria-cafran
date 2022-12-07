import React from "react";

const TituloLotes = () => {
    return (
        <>
            <div className="flex items-center justify-evenly gap-5 px-16 sm:justify-start md:flex-col">
                <h2 className="text-4xl font-bold text-cafranGray-semiDark">
                    Lotes
                </h2>
                <div className="h-16 border-r-2 border-solid border-cafranGray-semilight/50 md:hidden"></div>
                <p className="w-[135px] text-[13px] leading-4 text-cafranGray-dark sm:w-[261px]">
                    Encontrá el lugar ideal para tu vivienda permanente o de fin
                    de semana.
                </p>
                <div className="mt-6 hidden border-b-2 border-solid border-cafranGray-semilight/50"></div>
            </div>
        </>
    );
};

export default TituloLotes;
