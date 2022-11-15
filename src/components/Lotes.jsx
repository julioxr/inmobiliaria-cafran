import { RiShareLine } from "react-icons/ri";

const Lotes = () => {
    return (
        <>
            {/* Seccion de lotes */}
            <section className="px-12 mt-10">
                {/* Titulo */}
                <div className="flex justify-between">
                    <h2 className="font-bold text-4xl text-cafranGray-semiDark">
                        Lotes
                    </h2>
                    <div className="border-solid border-r-2 border-cafranGray-semilight"></div>
                    <p className="w-[135px] text-cafranGray-dark text-[13px] leading-4">
                        Encontrá el lugar ideal para tu vivienda permanente o de
                        fin de semana.
                    </p>
                </div>
                {/* Separador */}
                <img src="" alt="" />
                {/* Imagen de lote */}
                <div>
                    <h3>Barrio</h3>
                    <h2>La Candelaria</h2>
                    <h3>Ruta 193 Km 9,5</h3>
                    <p>
                        Intersección Ant. Argentina A 9 min. del centro de
                        Zárate
                    </p>
                    <h3>Lotes desde 450mt2</h3>
                </div>
                {/* Botones de lote */}
                <div>
                    <button>Ver Plano</button>
                    <button>Más información</button>
                    <RiShareLine />
                </div>
            </section>
        </>
    );
};

export default Lotes;
