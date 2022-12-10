import BotonesArrows from "./lotes/BotonesArrows";
import BotonesLotes from "./lotes/BotonesLotes";
import DetallesLotes from "./lotes/DetallesLotes";
import SliderLotes from "./lotes/SliderLotes";
import TituloLotes from "./lotes/TituloLotes";
import Separador from "./Separador";

const MainLotes = () => {
    return (
        <>
            {/* Seccion de lotes */}
            <section className="relative mt-10 grid grid-cols-1 pb-10 md:grid-cols-12">
                {/* Titulo */}
                <TituloLotes />
                {/* Sliders */}
                <SliderLotes />
                {/* Detalle de lote */}
                <DetallesLotes />
                {/* Botones de lote */}
                <BotonesLotes />
                {/* Separador */}
                {/*<Separador />*/}
                <BotonesArrows />
            </section>
        </>
    );
};

export default MainLotes;
