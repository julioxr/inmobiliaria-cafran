import { RiArrowRightLine, RiWhatsappLine } from "react-icons/ri";

const Contacto = () => {
    return (
        <>
            {/* Boton de contacto */}
            <div className="flex flex-col items-center justify-center">
                <h2 className="my-5 font-bold text-cafranGray-semiDark">
                    ¿Qué estás esperando? Escribinos.
                </h2>
                <div className="relative mb-1 flex items-center sm:mb-5">
                    <button
                        type="button"
                        className="mb-2 h-[43px] w-[198px] cursor-pointer rounded-md border border-cafranMain-secondary bg-cafranMain-secondary py-2.5 pl-10 text-left text-sm font-normal text-white hover:border-cafranMain-secondary/80 hover:bg-cafranMain-secondary/80"
                    >
                        Tu mensaje
                    </button>
                    <RiArrowRightLine className="absolute right-10 mb-2 cursor-pointer text-xl text-white" />
                </div>
                {/* Mapa con datos de contacto encima */}
                <div className="relative flex h-[410px] w-full items-center justify-center">
                    <div className="absolute bottom-2 z-20 h-[115px] w-[311px] rounded-md bg-[#0B4335]/90 py-2 px-4 font-semibold text-white">
                        <h3 className="text[17px]">Contactanos:</h3>
                        <p className="pl-[60px] text-[14px]">
                            Tel.: (03487) 437748 | 437707
                        </p>
                        <div className="flex items-start gap-2 pl-[80px]">
                            <div>
                                <RiWhatsappLine className="text-[18px]" />
                            </div>
                            <div className="text-[14px] font-light">
                                <p>3489 634421 (Ventas)</p>
                                <p>3487 455335 (Alquileres)</p>
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7048339403214!2d-59.021801!3d-34.1027012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0b5c9d3d947d%3A0xb6dff827c2fd275!2sHip%C3%B3lito%20Yrigoyen%20966%2C%20B2800JZT%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668889403528!5m2!1ses-419!2sar"
                        loading="lazy"
                        className="map relative z-10 h-full w-full"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contacto;
