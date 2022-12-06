import React from "react";

const DetallesLotes = () => {
    return (
        <>
            {/*El width es 246 ajustar espaciado pero va por ahi*/}
            <div className="z-10 row-span-1 -mt-14 mr-36 h-48 w-auto rounded-md bg-white pt-4 pl-8 font-bold text-cafranGray-dark sm:mr-0 sm:w-[246px]">
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
