import { RiShareLine, RiCheckboxBlankCircleFill } from "react-icons/ri";

const Lotes = () => {
    return (
        <>
            {/* Seccion de lotes */}
            <section className="mt-10 h-[710px] overflow-x-hidden">
                {/* Titulo */}
                <div className="flex justify-between px-16">
                    <h2 className="font-bold text-4xl text-cafranGray-semiDark">
                        Lotes
                    </h2>
                    <div className="border-solid border-r-2 border-cafranGray-semilight/50"></div>
                    <p className="w-[135px] text-cafranGray-dark text-[13px] leading-4">
                        Encontrá el lugar ideal para tu vivienda permanente o de
                        fin de semana.
                    </p>
                </div>
                {/* Separador */}
                <div className="mt-6 w-full h-[400px] relative -z-10">
                    {/* Foto carousel */}
                    <div className="absolute right-0">
                        <img
                            src="https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="imagen del interior de una casa"
                            className="w-[310px] h-[400px] object-cover"
                        />
                    </div>
                    {/* Puntos de desplazamiento */}
                    <div className="absolute bottom-[10px] right-12 flex gap-2 text-white text-[8px]">
                        <RiCheckboxBlankCircleFill />
                        <RiCheckboxBlankCircleFill />
                        <RiCheckboxBlankCircleFill />
                        <RiCheckboxBlankCircleFill />
                    </div>
                </div>
                {/* Imagen de lote */}
                <div className="bg-white w-[246px] h-48 rounded-md -mt-14 static z-10 font-bold text-cafranGray-dark pt-4 pl-8">
                    <h3 className="text-sm">BARRIO</h3>
                    <h2 className="text-[28px] pb">La Candelaria</h2>
                    <h3 className="text-sm pb-1">Ruta 193 Km 9,5</h3>
                    <p className="font-normal w-[179px] text-[13px] pb-1">
                        Intersección Ant. Argentina A 9 min. del centro de
                        Zárate
                    </p>
                    <h3>Lotes desde 450mt2</h3>
                </div>
                {/* Botones de lote */}
                <div className="px-8 flex justify-between items-center -mt-3">
                    <button
                        type="button"
                        className="text-cafranGray-dark bg-white border border-cafranGray-dark  font-normal rounded-md text-sm w-[103px] h-[43px] px-1 py-2.5 text-center hover:bg-cafranGray-dark hover:text-white"
                    >
                        Ver Plano
                    </button>
                    <button
                        type="button"
                        className="text-white border border-cafranMain-main bg-cafranMain-main font-normal rounded-md text-sm w-[157px] h-[43px] px-5 py-2.5 text-center hover:bg-cafranMain-main/80 hover:border-cafranMain-main/80"
                    >
                        Más información
                    </button>
                    <RiShareLine className="text-2xl text-cafranGray-dark" />
                </div>
                <div className="border-solid border-b-2 mt-6 border-cafranGray-semilight/50 mx-12"></div>
            </section>
        </>
    );
};

export default Lotes;
