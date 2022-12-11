import TextoPrincipalNosotros from "./nosotros/TextoPrincipalNosotros";
import CaracteristicasNosotros from "./nosotros/CaracteristicasNosotros";
import LogosNosotros from "./nosotros/LogosNosotros";

const Nosotros = () => {
    return (
        <>
            {/* Nosotros */}
            <section className="mt-6 h-auto w-full md:mt-12 lg:pl-[100px]">
                <div className="flex ">
                    <div className="mx-8 hidden h-[548px] w-[342px] shrink-0 md:block lg:h-[558px] lg:w-[456px]">
                        <img
                            src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="h-full w-auto rounded-lg object-cover"
                        />
                    </div>
                    <div className="md:my-auto">
                        {/* Info sobre compañia */}
                        <TextoPrincipalNosotros />
                        {/* Logos */}
                        <LogosNosotros />
                    </div>
                </div>
                {/* Elegir operaciones */}
                <CaracteristicasNosotros />
            </section>
        </>
    );
};

export default Nosotros;
