import React from "react";

const DetallesLotes = () => {
    return (
        <>
            {/*El width es 246 ajustar espaciado pero va por ahi*/}
            <div className="z-10 order-3 -mt-14 h-48 max-w-[246px] rounded-md bg-yellow-200 pt-4 pl-8 font-bold text-cafranGray-dark sm:max-w-[310px] sm:bg-white md:col-span-4 md:-mt-[125px] md:h-auto md:min-w-[345px] md:max-w-full md:px-12 lg:col-span-3 lg:-mt-[260px] lg:min-w-[470px] lg:px-[100px]">
                <h3 className="text-sm font-bold md:text-base">BARRIO</h3>
                <h2 className="text-[28px] md:pb-2 md:text-[32px] lg:text-4xl">
                    La Candelaria
                </h2>
                <h3 className="pb-1 text-sm md:pb-3 lg:text-base">
                    Ruta 193 Km 9,5
                </h3>
                <p className="w-[195px] pb-1 text-sm font-medium md:pb-2 lg:text-lg">
                    Intersección Ant. Argentina A 9 min. del centro de Zárate
                </p>
                <h3 className="font-bold md:text-lg lg:text-xl">
                    Lotes desde 450mt2
                </h3>
            </div>
        </>
    );
};

export default DetallesLotes;
