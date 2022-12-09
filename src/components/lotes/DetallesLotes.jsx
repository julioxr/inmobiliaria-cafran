import React from "react";

const DetallesLotes = () => {
    //      rounded-md md:h-auto sm:mr-0 sm:min-w-[246px]
    return (
        <>
            {/*El width es 246 ajustar espaciado pero va por ahi*/}
            <div className="z-10 -mt-14 h-48 max-w-[246px] rounded-md bg-yellow-200 pt-4 pl-8 font-bold text-cafranGray-dark sm:max-w-[310px] md:col-span-4 md:mt-0 md:h-full md:max-w-full">
                <h3 className=" text-sm">BARRIO</h3>
                <h2 className="pb text-[28px]">La Candelaria</h2>
                <h3 className="pb-1 text-sm">Ruta 193 Km 9,5</h3>
                <p className="w-[179px] pb-1 text-[13px] font-normal">
                    Intersección Ant. Argentina A 9 min. del centro de Zárate
                </p>
                <h3>Lotes desde 450mt2</h3>
            </div>
        </>
    );
};

export default DetallesLotes;
