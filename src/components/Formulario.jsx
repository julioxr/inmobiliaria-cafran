import React from "react";

const Formulario = () => {
    return (
        <div className="h-auto w-full pt-16 relative px-8">
            <span className="absolute right-4 top-4">X</span>
            <h1 className="font-semibold text-cafranGray-dark mb-6 w-[300px]">
                Envianos tu consulta en el formulario. Respondemos a la
                brevedad.
            </h1>
            <form
                action="#"
                className="flex flex-col h-auto w-full gap-y-6 justify-center items-center"
            >
                <input
                    type="text"
                    placeholder="Nombre y Apellido"
                    className="w-full h-[48px] rounded border-[1px] border-cafranGray-dark/50 text-xs bg-white text-cafranGray-semiDark p-4 outline-none"
                />
                {/* <span>error</span> */}
                <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="w-full h-[48px] rounded border-[1px] border-cafranGray-dark/50 text-xs bg-white text-cafranGray-semiDark p-4 outline-none"
                />
                {/* <span>error</span> */}
                <select
                    name="motivo"
                    id=""
                    className="w-full h-[48px] rounded border-[1px] border-cafranGray-dark/50 text-xs bg-white text-cafranGray-semiDark p-4 outline-none"
                >
                    <option value="motivo1">Motivo (elegir una opcion)</option>
                    <option value="motivo1">Motivo 2</option>
                    <option value="motivo1">Motivo 3</option>
                </select>
                {/* <span>error</span> */}
                <textarea
                    name=""
                    id=""
                    placeholder="Me gustaria obtener mas informacion sobre esta propiedad"
                    className="w-full h-[153px] rounded border-[1px] border-cafranGray-dark/50 text-xs bg-white text-cafranGray-semiDark p-4 outline-none"
                ></textarea>
                <button
                    type="submit"
                    className="text-white border border-cafranMain-secondary bg-cafranMain-secondary text-center mb-6 font-normal rounded-md text-sm w-[157px] h-[43px] backdrop:py-2.5 hover:bg-cafranMain-secondary/80 hover:border-cafranMain-secondary/80 cursor-pointer self-end"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
};

export default Formulario;
