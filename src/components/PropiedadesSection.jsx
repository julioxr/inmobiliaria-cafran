import { useEffect } from "react";
import Filters from "./Filters";
import BuscadorDeFiltros from "./BuscadorDeFiltros";
import CardDestacadaMediana from "./CardDestacadaMediana";

const PropiedadesSection = ({ setSidebarOpen }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
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
                    <CardDestacadaMediana src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=600" />

                    <CardDestacadaMediana src="https://images.pexels.com/photos/187815/pexels-photo-187815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    <CardDestacadaMediana src="https://images.pexels.com/photos/7475597/pexels-photo-7475597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    <CardDestacadaMediana src="https://images.pexels.com/photos/5353946/pexels-photo-5353946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
