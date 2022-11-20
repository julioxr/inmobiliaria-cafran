import BotonFiltro from "./BotonFiltro";
import { RiFilter2Line } from "react-icons/ri";
import CardDestacadaMediana from "./CardDestacadaMediana";

const Filters = () => {
    return (
        // Seccion de filtros, solo aparece cuando filtra
        <div className="w-full h-auto px-8">
            <h1 className="font-bold text-[14px] text-cafranGray-semilight text-center my-2">
                Tenemos 20 resultados para tu busqueda
            </h1>
            {/* Opciones del filtro */}
            <div className="flex text-cafranGray-dark text-xs my-2 items-center">
                <h4 className="font-medium mr-2">Ordenado por:</h4>
                <select
                    name=""
                    id=""
                    className="w-[120px] border-b-cafranGray-semiDark border-b-[1px] "
                >
                    <option value="Destacadas" className="">
                        Destacadas
                    </option>
                </select>
                <div className=" bg-cafranGray-semiDark text-white w-20 h-[23px] ml-auto flex items-center justify-around">
                    <span>Filtros</span>
                    <RiFilter2Line className="right-0 bottom-0 h-[12px] w-[12px]" />
                </div>
            </div>
            {/* Filtros seleccionado */}
            <div id="filtros" className="flex flex-wrap mb-4 items-center">
                <BotonFiltro nombre={"Departamento"} />
                <BotonFiltro nombre={"Dormitorios 2"} />
                <BotonFiltro nombre={"Cochera"} />
                <BotonFiltro nombre={"Zárate"} />
                <span className="text-[10px] text-cafranMain-secondary mt-2">
                    Limpiar Filtros
                </span>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center mb-6">
                <CardDestacadaMediana />
                <CardDestacadaMediana />
                <CardDestacadaMediana />
                <CardDestacadaMediana />
            </div>
        </div>
    );
};

export default Filters;
