import { useEffect } from "react";
import Filters from "./Filters";
import BuscadorDeFiltros from "./BuscadorDeFiltros";

const PropiedadesSection = ({ setSidebarOpen }) => {
    useEffect(() => {
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
            </div>
        </>
    );
};

export default PropiedadesSection;
