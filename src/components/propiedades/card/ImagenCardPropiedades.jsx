import React from "react";

const ImagenCardPropiedades = ({ src }) => {
    return (
        <div className="h-[166px] md:h-[227px]">
            <img
                src={src}
                alt="foto de tarjeta de propiedad"
                className="h-full w-full rounded-tl-md rounded-tr-md object-cover"
            />
        </div>
    );
};

export default ImagenCardPropiedades;
