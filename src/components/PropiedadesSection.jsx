import { useEffect } from "react";
import Filters from "./Filters";
import BuscadorDeFiltros from "./BuscadorDeFiltros";
import CardDestacadaMediana from "./CardDestacadaMediana";

const PropiedadesSection = ({ setSidebarOpen }) => {
    useEffect(() => {
        // window.scrollTo(0, 0);
        setSidebarOpen(false);
    }, []);
    return (
        <>
            {/* Seccion de filtros */}
            <div>
                {/* Formulario de filtros */}
                <form action="#">
                    {/* Buscador */}
                    <BuscadorDeFiltros />
                    {/* Filtros */}
                    <Filters />
                </form>
                <div className="flex flex-col gap-6 justify-center items-center mb-8">
                    <CardDestacadaMediana />
                    <CardDestacadaMediana />
                    <CardDestacadaMediana />
                    <CardDestacadaMediana />
                </div>
                <div className="flex items-center justify-center mb-8">
                    <button
                        type="button"
                        className="text-cafranGray-dark border border-cafranGray-dark bg-cafranMain-white  cursor-pointer text-center font-normal rounded-md text-sm w-[192px] h-[43px] py-2.5 hover:bg-cafranGray-semilight/50 hover:border-cafranGray-semilight/50"
                    >
                        Ver más propiedades
                    </button>
                </div>
            </div>
        </>
    );
};

export default PropiedadesSection;
