import React from "react";
import BotonesCardPropiedades from "./card/BotonesCardPropiedades";
import FooterCardPropiedades from "./card/FooterCardPropiedades";
import ImagenCardPropiedades from "./card/ImagenCardPropiedades";

const CardChicaPropiedades = ({ src }) => {
    // w-[215px] md:max-w-[393px]
    return (
        <>
            {/* Card chica vertical */}
            <div className="mb-4 h-[260px] min-w-[215px] rounded-md bg-white shadow-md md:h-[354px] md:max-w-[393px]">
                {/* Imagen */}
                <ImagenCardPropiedades src={src} />
                {/* Botones */}
                <BotonesCardPropiedades />
                {/* Descripcion */}
                <FooterCardPropiedades />
            </div>
        </>
    );
};

export default CardChicaPropiedades;
