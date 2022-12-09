import BotonesLotes from "./lotes/BotonesLotes";
import DetallesLotes from "./lotes/DetallesLotes";
import SliderLotes from "./lotes/SliderLotes";
import TituloLotes from "./lotes/TituloLotes";
import Separador from "./Separador";

const MainLotes = () => {
    return (
        <>
            {/* Seccion de lotes */}
            <section className="mt-10 grid grid-cols-1 grid-rows-3 overflow-x-hidden pb-12 md:grid-cols-12 md:grid-rows-2">
                {/* Titulo */}
                <TituloLotes />
                {/* Sliders */}
                <SliderLotes />
                {/* Detalle de lote */}
                <DetallesLotes />
                {/* Botones de lote */}
                {/*<BotonesLotes />*/}
                {/* Separador */}
                {/*<Separador />*/}
            </section>
        </>
    );
};

export default MainLotes;
