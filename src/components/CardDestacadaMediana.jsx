import React from "react";

const CardDestacadaMediana = () => {
    return (
        <>
            {/* Card chica vertical */}
            <div className="w-[312px] h-auto rounded-md  shadow-md">
                {/* Imagen */}
                <div className="h-[250px]">
                    <img
                        src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="foto de tarjeta de propiedad"
                        className="rounded-tl-md rounded-tr-md w-full h-full"
                    />
                </div>
                {/* Botones */}
                <div className="flex items-center text-center align-middle h-[38px]">
                    <h4 className="bg-cafranMain-main2 font-bold text-white text-xl leading-[38px] w-4/12 inline-block ">
                        VENDE
                    </h4>
                    <p className="bg-cafranGray-semiDark text-white text-[14px] leading-[38px] w-8/12">
                        Ituzaingó 689 | Zárate
                    </p>
                </div>
                {/* Descripcion */}
                <footer className="text-[13px] pt-2 pb-3 px-2 leading-3">
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

export default CardDestacadaMediana;
