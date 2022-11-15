import React from "react";

const Buscador = () => {
    return (
        <>
            <form action="" className="flex justify-center mt-2">
                <input
                    className="w-[300px] h-[53px] rounded text-sm bg-white text-cafranGray-semiDark p-4"
                    type="text"
                    placeholder="Buscar por Localidad, Barrio, Calle..."
                />
            </form>
        </>
    );
};

export default Buscador;
