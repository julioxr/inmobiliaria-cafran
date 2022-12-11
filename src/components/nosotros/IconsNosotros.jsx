import bxShield from "../../assets/bx-shield.svg";
import bxMessageDetail from "../../assets/bx-message-detail.svg";
import bxMedal from "../../assets/bx-medal.svg";
import bxStar from "../../assets/bx-star.svg";

const IconsNosotros = () => {
    return (
        <>
            <div className="flex w-[241px] gap-5 sm:h-[174px] sm:w-[128px] sm:flex-col sm:items-center sm:text-center lg:h-[164px] lg:w-[190px] xl:h-[170px] xl:w-[205px]">
                <img
                    src={bxShield}
                    alt="icono de un escudo"
                    className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                />
                <div className="flex h-full items-center">
                    <p className="text-[12px] font-light md:w-[180px] md:text-[14px] lg:text-[15px]">
                        Somos la opcion más segura. Garantizamos transacciones
                        claras y fiables.
                    </p>
                </div>
            </div>
            <div className="flex w-[241px] gap-5 sm:h-[174px] sm:w-[128px] sm:flex-col sm:items-center sm:text-center lg:h-[164px] lg:w-[190px] xl:h-[170px] xl:w-[205px]">
                <img
                    src={bxStar}
                    alt="icono de una estrella"
                    className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                />
                <div className="flex h-full items-center">
                    <p className="text-[12px] font-light md:w-[180px] md:text-[14px] lg:text-[15px]">
                        Contamos con una amplia trayectoría en el mercado
                        inmobiliario.
                    </p>
                </div>
            </div>
            <div className="flex w-[241px] gap-5 sm:h-[174px] sm:w-[128px] sm:flex-col sm:items-center sm:text-center lg:h-[164px] lg:w-[190px] xl:h-[170px] xl:w-[205px]">
                <img
                    src={bxMedal}
                    alt="icono de una medalla"
                    className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                />
                <div className="flex h-full items-center">
                    <p className="text-[12px] font-light md:w-[180px] md:text-[14px] lg:text-[15px]">
                        Brindamos atención personalizada. Juntos vamos a
                        encontrar lo que estás buscando.
                    </p>
                </div>
            </div>
            <div className="flex w-[241px] gap-5 sm:h-[174px] sm:w-[128px] sm:flex-col sm:items-center sm:text-center lg:h-[164px] lg:w-[190px] xl:h-[170px] xl:w-[205px]">
                <img
                    src={bxMessageDetail}
                    alt="icono de mensaje"
                    className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                />
                <div className="flex h-full items-center">
                    <p className="text-[12px] font-light md:w-[180px] md:text-[14px] lg:text-[15px]">
                        Utilizamos todos los canales de comunicación para que
                        puedas conocer novedades.
                    </p>
                </div>
            </div>
        </>
    );
};

export default IconsNosotros;
