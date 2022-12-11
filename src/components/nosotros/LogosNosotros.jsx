import logoCorto from "../../assets/logo-corto-anibal.svg";
import logoCafran from "../../assets/logo-cafran.svg";

const LogosNosotros = () => {
    return (
        <div className="my-6 flex justify-center gap-6 sm:my-10 sm:gap-8 md:gap-10">
            <img
                // ! El tamaño de la imagen tiene padding blancos
                src={logoCorto}
                alt="logo corto de anibal marcelo vera"
                className="w-[116px] sm:w-[138px] md:w-[171px]"
            />
            <img
                src={logoCafran}
                alt="logo de cafran inmobiliaria"
                className="w-[155px] sm:w-[185px] md:w-[229px]"
            />
        </div>
    );
};

export default LogosNosotros;
