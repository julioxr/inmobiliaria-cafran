import React from "react";

const Formulario = () => {
    return (
        <>
            <form action="#" className="flex flex-col">
                <input type="text" placeholder="Nombre y Apellido" />
                {/* <span>error</span> */}
                <input type="email" name="" id="" placeholder="Email" />
                {/* <span>error</span> */}
                <select name="motivo" id="">
                    <option value="motivo1">Motivo 1</option>
                    <option value="motivo1">Motivo 2</option>
                    <option value="motivo1">Motivo 3</option>
                </select>
                {/* <span>error</span> */}
                <textarea
                    name=""
                    id=""
                    placeholder="Me gustaria obtener mas informacion sobre esta propiedad"
                ></textarea>
                <button type="submit">Enviar Mensaje</button>
            </form>
        </>
    );
};

export default Formulario;
