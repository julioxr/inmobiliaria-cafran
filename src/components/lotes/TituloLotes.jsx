import React from "react";

const TituloLotes = () => {
    return (
        <>
            <div className="order-1 flex h-16 items-center gap-5 bg-white px-8 md:col-span-4 md:h-auto md:min-w-[320px] md:flex-col md:items-start md:px-12 md:pt-12 lg:col-span-3 lg:min-w-[410px] lg:px-[100px] lg:pt-20">
                <h2 className="text-[34px] font-bold text-cafranGray-semiDark md:text-[40px]">
                    Lotes
                </h2>
                <div className="h-16 border-r-2 border-solid border-cafranGray-semilight/50 md:hidden"></div>
                <p className="max-w-[135px] text-[13px] leading-4 text-cafranGray-dark md:w-[353px] md:max-w-[300px] md:text-sm   lg:w-[494px] lg:pb-2 lg:text-base">
                    Encontrá el lugar ideal para tu vivienda permanente o de fin
                    de semana.
                </p>
                <div className="hidden w-full max-w-[300px] border-t-2 border-solid border-cafranGray-semilight/50 md:block"></div>
            </div>
        </>
    );
};

export default TituloLotes;
