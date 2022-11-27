import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import sizeIcon from "../assets/size-icon.svg";
import bedroomIcon from "../assets/bedroom-icon.svg";
import bathIcon from "../assets/bath-icon.svg";
import { RiArrowLeftLine, RiShareLine, RiWhatsappLine } from "react-icons/ri";

const Features = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="text-cafranGray-dark">
            {/* Nav */}
            <div className="flex h-[40px] text-cafranGray-semiDark items-center justify-between px-8">
                <div className="flex items-center h-full">
                    <RiArrowLeftLine className="text-base mr-2" />
                    <p className="text-[12px]">Volver a propiedades</p>
                </div>
                <RiShareLine className="text-xl" />
            </div>
            {/* Imagen con absolutes */}
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3935348/pexels-photo-3935348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="h-[320px] w-full"
                />
                <div className="absolute bottom-2 right-2 flex gap-6">
                    <div className="flex">
                        <span>o</span>
                        <span>o</span>
                        <span>o</span>
                        <span>o</span>
                    </div>
                    <div className="flex">
                        <span>Flecha</span>
                        <span>Flecha</span>
                    </div>
                </div>
            </div>
            {/* Datos de ubicacion */}

            <div className="flex h-[85px] px-8 items-center justify-between">
                <div>
                    <h1 className="font-bold text-cafranGray-dark text-xl">
                        Ituizango 689
                    </h1>
                    <h3 className="text-xs text-cafranGray-dark">
                        Zarate - Buenos Aires
                    </h3>
                    <p className="text-[10px] text-cafranGray-semiDark">
                        Codigo 25641
                    </p>
                </div>
                <div className="flex items-center relative">
                    <NavLink to="">
                        <button
                            type="button"
                            className="text-white border border-[#25D366] bg-[#25D366] text-left pl-8 mb-2 font-bold rounded-md text-sm w-[157px] h-[43px] py-2.5 hover:bg-[#25D366]/80 hover:border-[#25D366]/80 cursor-pointer"
                        >
                            Contactar
                        </button>
                    </NavLink>
                    <RiWhatsappLine className="absolute  h-full right-5 text-2xl text-white mb-2 cursor-pointer" />
                </div>
            </div>
            {/* Iconos descriptivos */}
            <div className="flex mx-8 h-[47px] gap-1 border-cafranGray-semiDark/50 border-y-[1px]">
                <div className="flex justify-center items-center w-1/3">
                    <img src={sizeIcon} alt="icono de medida" />
                    <p className="text-[10px] pl-2 text-cafranGray-dark">
                        Sup. Total 153m2
                    </p>
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <img src={bedroomIcon} alt="icono de habitacion" />

                    <p className="text-[10px] pl-2 text-cafranGray-dark">
                        3 Dormitorios
                    </p>
                </div>
                <div className="flex justify-center items-center w-1/3">
                    <img src={bathIcon} alt="icono de baños" />

                    <p className="text-[10px] pl-2 text-cafranGray-dark">
                        2 Baños
                    </p>
                </div>
            </div>
            {/* Descripcion */}
            <article className="mx-8 py-2 h-auto flex flex-col justify-center border-cafranGray-semiDark/50 border-b-[1px]">
                <h2 className="font-semibold text-base">Descripcion</h2>
                <p className="font-light text-[13px] pt-2 text-cafranGray-dark">
                    Departamento en Venta. Ubicado en el centro de la ciudad,
                    entre calles Justa Lima y Alte. Brown. Luminoso living con
                    amplias ventanas al balcón. El comedor está integrado a la
                    cocina, la cual incluye electrodomésticos empotrados. Cuenta
                    con dos dormitorios, uno en suite con baño y cambiador. Baño
                    para invitados. Cochera semitechada y estacionamiento libre.
                    Paga Expensas. Superficie Total del inmueble 153m2
                </p>
            </article>
            {/* Ficha tecnica */}
            <article className="mx-8 py-2 h-auto flex border-cafranGray-semiDark/50 border-b-[1px]">
                <h2 className="font-semibold text-base">Ficha</h2>
                <div className="pl-[35px]">
                    <ul className="font-light text-[13px] text-cafranGray-dark">
                        <li> Sup. Total: 153 m2</li>
                        <li> Sup. Semicub.: 5 m2</li>
                        <li> Sup. Cubierta: 148 m2</li>
                        <li> Ambientes: 4</li>
                        <li> Dormitorios: 2</li>
                        <li> Baños: 2</li>
                        <li> Balcón: 1</li>
                        <li> Cochera: 1</li>
                        <li> Expensas: (A consultar)</li>
                        <li> Estado: Muy Bueno</li>
                        <li> Antiguedad: 10 años</li>
                        <li> Luminosidad: Luminoso</li>
                        <li> Patio / Jardín: --</li>
                    </ul>
                </div>
            </article>
            {/* Caracteristicas */}
            <article className="h-auto py-2 mx-8 border-cafranGray-semiDark/50 border-b-[1px]">
                <h2 className="font-semibold text-base">Características</h2>
                <ul className="flex font-light text-[13px] justify-between pt-2 text-cafranGray-dark">
                    <li>Tipo de edificio: Torre</li>
                    <li>Estado: Muy bueno</li>
                </ul>
            </article>
            {/* Servicios */}
            <article className="h-auto py-2 mx-8 border-cafranGray-semiDark/50 border-b-[1px]">
                <h2 className="font-semibold text-base">Servicios</h2>
                <ul className="flex flex-wrap gap-y-1 font-light text-[13px] pt-2 text-cafranGray-dark">
                    <li className="w-1/3">Agua corriente</li>
                    <li className="w-1/3">Gas natual</li>
                    <li className="w-1/3">Telefono</li>
                    <li className="w-1/3">Electricidad</li>
                    <li className="w-1/3">Interenet</li>
                    <li className="w-1/3">Video Cable</li>
                </ul>
            </article>
            {/* Ubicacion */}
            <article className="mx-8">
                <div className="flex justify-between h-[40px] pt-2">
                    <h2 className="font-semibold text-base">Ubicación</h2>
                    <h2 className="font-bold text-base">
                        Ituizango 689, Zarate
                    </h2>
                </div>
                <div className="h-[255px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7048339403214!2d-59.021801!3d-34.1027012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0b5c9d3d947d%3A0xb6dff827c2fd275!2sHip%C3%B3lito%20Yrigoyen%20966%2C%20B2800JZT%20Z%C3%A1rate%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1668889403528!5m2!1ses-419!2sar"
                        loading="lazy"
                        className="w-full h-full relative z-10 map"
                    ></iframe>
                </div>
            </article>
            {/* Contacto */}
            <div className="flex flex-col justify-center items-center gap-y-3 h-[112px]">
                <h2 className="text-[18px]">¿Te ha gustado esta propiedad?</h2>
                <div>
                    <button>Contactanos </button>
                    <span>flecha</span>
                </div>
            </div>
        </section>
    );
};

export default Features;
