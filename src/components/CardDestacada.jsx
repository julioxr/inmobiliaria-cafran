import React from "react";

const CardDestacada = ({ src }) => {
    return (
        <>
            {/* Card chica vertical */}
            <div className="w-[200px] h-[246px] rounded-md bg-white shadow-md shrink-0">
                {/* Imagen */}
                <div className="h-[150px]">
                    <img
                        src={src}
                        alt="foto de tarjeta de propiedad"
                        className="rounded-tl-md rounded-tr-md w-full h-full"
                    />
                </div>
                {/* Botones */}
                <div className="flex items-center text-center align-middle h-[30px]">
                    <h4 className="bg-cafranMain-main2 font-bold text-white text-sm leading-[30px] w-4/12 inline-block ">
                        VENDE
                    </h4>
                    <p className="bg-cafranGray-semiDark text-white text-[10px] leading-[30px] w-8/12">
                        Ituzaingó 689 | Zárate
                    </p>
                </div>
                {/* Descripcion */}
                <footer className="text-[10px] pt-1 px-2 h-[65px] leading-3">
                    <p>
                        <span className="font-semibold ">Departamento:</span>
                        Excelente ubicación en el centro. Sup. Total 153m2 | 2
                        Dormitorios | 2 Baños | Cochera | Balcón.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default CardDestacada;
