import logoCorto from "../assets/logo-corto-anibal.svg";
import logoCafran from "../assets/logo-cafran.svg";
import bxShield from "../assets/bx-shield.svg";
import bxMessageDetail from "../assets/bx-message-detail.svg";
import bxMedal from "../assets/bx-medal.svg";
import bxStar from "../assets/bx-star.svg";
import Contacto from "./Contacto";

const Nosotros = () => {
    return (
        <>
            {/* Nosotros */}
            <section className="w-full h-auto mt-6">
                {/* Info sobre compañia */}
                <div className="px-8">
                    {/* Info principal */}
                    <h2 className="text-cafranGray-dark font-bold text-[34px]">
                        Nosotros
                    </h2>
                    <p className="text-cafranGray-dark text-[13px]">
                        Acompañando sueños de viviendas desde ..... años. Nos
                        encontramos en la ciudad de Zárate, pero nuestros
                        negocios inmobiliarios abarcan las zonas de ....
                    </p>
                    {/* Destacado barra roja */}
                    <div className="flex h-[45px] my-4 gap-3">
                        <div className="border-solid border-l-[5px] border-cafranMain-secondary"></div>
                        <h3 className="font-semibold text-base text-cafranGray-semiDark">
                            La dedicación y profesionalismo que nos caracteriza
                            siempre.
                        </h3>
                    </div>
                    {/* Info secundaria */}
                    <p className="text-[13px] mt-6 mb-4 text-cafranGray-dark font-light">
                        Adaptamos nuestra imagen a los requerimientos actuales,
                        combinando la identidad de siempre con la marca personal
                        Marcelo Anibal Vera.
                    </p>
                    {/* Logos */}
                    <div className="flex justify-center">
                        <img
                            // ! El tamaño de la imagen tiene padding blancos
                            src={logoCorto}
                            alt="logo corto de anibal marcelo vera"
                        />
                        <img
                            src={logoCafran}
                            alt="logo de cafran inmobiliaria"
                        />
                    </div>
                </div>
                {/* Elegir operaciones */}
                <div className="h-auto w-[300px] mx-auto mt-4 mb-6">
                    <h2 className="text-cafranGray-semiDark font-semibold text-base mb-6">
                        ¿Por qué elegirnos en tu operación?
                    </h2>
                    <div className="flex flex-col justify-center items-center gap-3 text-cafranGray-dark">
                        <div className="flex gap-5 w-[241px]">
                            <img
                                src={bxShield}
                                alt="icono de un escudo"
                                className="w-[43px] h-[43px] "
                            />
                            <p className="font-light text-[13px]">
                                Somos la opcion más segura. Garantizamos
                                transacciones claras y fiables.
                            </p>
                        </div>
                        <div className="flex gap-5 w-[241px]">
                            <img
                                src={bxStar}
                                alt="icono de una estrella"
                                className="w-[43px] h-[43px] "
                            />
                            <p className="font-light text-[13px]">
                                Contamos con una amplia trayectoría en el
                                mercado inmobiliario.
                            </p>
                        </div>
                        <div className="flex gap-5 w-[241px]">
                            <img
                                src={bxMedal}
                                alt="icono de una medalla"
                                className="w-[43px] h-[43px] "
                            />
                            <p className="font-light text-[13px]">
                                Brindamos atención personalizada. Juntos vamos a
                                encontrar lo que estás buscando.
                            </p>
                        </div>
                        <div className="flex gap-5 w-[241px]">
                            <img
                                src={bxMessageDetail}
                                alt="icono de mensaje"
                                className="w-[43px] h-[43px] "
                            />
                            <p className="font-light text-[13px]">
                                Utilizamos todos los canales de comunicación
                                para que puedas conocer novedades.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Contacto */}
                <Contacto />
            </section>
        </>
    );
};

export default Nosotros;
