import { RiArrowRightLine } from "react-icons/ri";

const Contacto = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-cafranGray-semiDark">
                    ¿Qué estás esperando? Escribinos.
                </h2>
                <div className="flex items-center relative">
                    <button
                        type="button"
                        className="text-white border border-cafranMain-secondary bg-cafranMain-secondary text-left pl-8 mb-2 font-normal rounded-md text-sm w-[157px] h-[43px] py-2.5 hover:bg-cafranMain-secondary/80 hover:border-cafranMain-secondary/80 cursor-pointer"
                    >
                        Tu mensaje
                    </button>
                    <RiArrowRightLine className="absolute right-6 text-xl mb-2 cursor-pointer" />
                </div>
                <div className="w-full h-[410px] relative">
                    <div className="w-[311px] h-[115px] absolute rounded-md bg-[#0B4335]/90 text-white z-20 bottom-0">
                        <h3>Contactanos:</h3>
                        <p>Tel.: (03487) 437748 | 437707</p>
                        <div>
                            <span></span>
                        </div>
                        <div>
                            <p>3489 634421 (Ventas)</p>
                            <p>3487 455335 (Alquileres)</p>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7048339403214!2d-59.021801!3d-34.1027012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0b5c9d3d947d%3A0xb6dff827c2fd275!2sHip%C3%B3lito%20Yrigoyen%20966%2C%20B2800JZT%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668889403528!5m2!1ses-419!2sar"
                        loading="lazy"
                        className="w-full h-full relative z-10 map"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contacto;
