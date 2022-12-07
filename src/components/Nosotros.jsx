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
            <section className="mt-6 h-auto w-full">
                {/* Info sobre compañia */}
                <div className="px-8">
                    {/* Info principal */}
                    <h2 className="text-[34px] font-bold text-cafranGray-semiDark/70">
                        Nosotros
                    </h2>
                    <p className="text-[13px] text-cafranGray-dark">
                        Acompañando sueños de viviendas desde ..... años. Nos
                        encontramos en la ciudad de Zárate, pero nuestros
                        negocios inmobiliarios abarcan las zonas de ....
                    </p>
                    {/* Destacado barra roja */}
                    <div className="my-4 flex h-[45px] gap-3">
                        <div className="border-l-[5px] border-solid border-cafranMain-secondary"></div>
                        <h3 className="text-base font-semibold text-cafranGray-semiDark">
                            La dedicación y profesionalismo que nos caracteriza
                            siempre.
                        </h3>
                    </div>
                    {/* Info secundaria */}
                    <p className="mt-6 mb-4 text-[13px] font-light text-cafranGray-dark">
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
                <div className="mx-auto mt-4 mb-4 h-auto w-[300px]">
                    <h2 className="mb-6 text-base font-semibold text-cafranGray-semiDark">
                        ¿Por qué elegirnos en tu operación?
                    </h2>
                    <div className="flex flex-col items-center justify-center gap-3 text-cafranGray-dark">
                        <div className="flex w-[241px] gap-5">
                            <img
                                src={bxShield}
                                alt="icono de un escudo"
                                className="h-[43px] w-[43px] "
                            />
                            <p className="text-[13px] font-light">
                                Somos la opcion más segura. Garantizamos
                                transacciones claras y fiables.
                            </p>
                        </div>
                        <div className="flex w-[241px] gap-5">
                            <img
                                src={bxStar}
                                alt="icono de una estrella"
                                className="h-[43px] w-[43px] "
                            />
                            <p className="text-[13px] font-light">
                                Contamos con una amplia trayectoría en el
                                mercado inmobiliario.
                            </p>
                        </div>
                        <div className="flex w-[241px] gap-5">
                            <img
                                src={bxMedal}
                                alt="icono de una medalla"
                                className="h-[43px] w-[43px] "
                            />
                            <p className="text-[13px] font-light">
                                Brindamos atención personalizada. Juntos vamos a
                                encontrar lo que estás buscando.
                            </p>
                        </div>
                        <div className="flex w-[241px] gap-5">
                            <img
                                src={bxMessageDetail}
                                alt="icono de mensaje"
                                className="h-[43px] w-[43px] "
                            />
                            <p className="text-[13px] font-light">
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
