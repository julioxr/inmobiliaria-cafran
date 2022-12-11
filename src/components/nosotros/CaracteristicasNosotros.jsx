import bxShield from "../../assets/bx-shield.svg";
import bxMessageDetail from "../../assets/bx-message-detail.svg";
import bxMedal from "../../assets/bx-medal.svg";
import bxStar from "../../assets/bx-star.svg";

const CaracteristicasNosotros = () => {
    return (
        <div className="mx-auto mb-4 h-auto w-[300px] sm:w-[578px]">
            <h2 className="mb-6 w-auto text-base font-semibold text-cafranGray-semiDark sm:text-center md:text-xl">
                ¿Por qué elegirnos en tu operación?
            </h2>
            <div className="flex flex-col items-center justify-center gap-3 text-cafranGray-dark sm:flex-row">
                <div className="flex w-[241px] gap-5 sm:w-[128px] sm:flex-col sm:items-center sm:text-center">
                    <img
                        src={bxShield}
                        alt="icono de un escudo"
                        className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                    />
                    <p className="text-[12px] font-light md:text-[15px]">
                        Somos la opcion más segura. Garantizamos transacciones
                        claras y fiables.
                    </p>
                </div>
                <div className="flex w-[241px] gap-5 sm:w-[128px] sm:flex-col sm:items-center sm:text-center">
                    <img
                        src={bxStar}
                        alt="icono de una estrella"
                        className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                    />
                    <p className="text-[12px] font-light md:text-[15px]">
                        Contamos con una amplia trayectoría en el mercado
                        inmobiliario.
                    </p>
                </div>
                <div className="flex w-[241px] gap-5 sm:w-[128px] sm:flex-col sm:items-center sm:text-center">
                    <img
                        src={bxMedal}
                        alt="icono de una medalla"
                        className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                    />
                    <p className="text-[12px] font-light md:text-[15px]">
                        Brindamos atención personalizada. Juntos vamos a
                        encontrar lo que estás buscando.
                    </p>
                </div>
                <div className="flex w-[241px] gap-5 sm:w-[128px] sm:flex-col sm:items-center sm:text-center">
                    <img
                        src={bxMessageDetail}
                        alt="icono de mensaje"
                        className="h-[43px] w-[43px] md:h-[46px] md:w-[46px]"
                    />
                    <p className="text-[12px] font-light md:text-[15px]">
                        Utilizamos todos los canales de comunicación para que
                        puedas conocer novedades.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CaracteristicasNosotros;
