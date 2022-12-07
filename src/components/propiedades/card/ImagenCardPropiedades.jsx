import React from "react";

const ImagenCardPropiedades = ({ src }) => {
    return (
        <div className="h-[150px]">
            <img
                src={src}
                alt="foto de tarjeta de propiedad"
                className="h-full w-full rounded-tl-md rounded-tr-md"
            />
        </div>
    );
};

export default ImagenCardPropiedades;
