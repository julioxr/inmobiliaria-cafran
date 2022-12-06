import React from "react";

const TituloLotes = () => {
    return (
        <>
            <div className="flex justify-between px-16 sm:flex-col sm:justify-start">
                <h2 className="text-4xl font-bold text-cafranGray-semiDark">
                    Lotes
                </h2>
                <div className="border-r-2 border-solid border-cafranGray-semilight/50 sm:hidden"></div>
                <p className="w-[135px] text-[13px] leading-4 text-cafranGray-dark">
                    Encontrá el lugar ideal agafafsafd para tu vivienda
                    permanente o de fin de semana.
                </p>
                <div className="mt-6 border-b-2 border-solid border-cafranGray-semilight/50"></div>
            </div>
        </>
    );
};

export default TituloLotes;
