import TextoPrincipalNosotros from "./nosotros/TextoPrincipalNosotros";
import CaracteristicasNosotros from "./nosotros/CaracteristicasNosotros";
import LogosNosotros from "./nosotros/LogosNosotros";

const Nosotros = () => {
    return (
        <>
            {/* Nosotros */}
            <section className="mt-6 h-auto w-full">
                {/* Info sobre compañia */}
                <TextoPrincipalNosotros />
                {/* Logos */}
                <LogosNosotros />
                {/* Elegir operaciones */}
                <CaracteristicasNosotros />
            </section>
        </>
    );
};

export default Nosotros;
