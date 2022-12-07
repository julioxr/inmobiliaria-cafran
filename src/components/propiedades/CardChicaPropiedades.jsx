import React from "react";
import BotonesCardPropiedades from "./card/BotonesCardPropiedades";
import FooterCardPropiedades from "./card/FooterCardPropiedades";
import ImagenCardPropiedades from "./card/ImagenCardPropiedades";

const CardChicaPropiedades = ({ src }) => {
    return (
        <>
            {/* Card chica vertical */}
            <div className="h-[246px] w-[200px] shrink-0 rounded-md bg-white shadow-md">
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
