import BannerPropiedades from "./propiedades/BannerPropiedades";
import DestacadasPropiedades from "./propiedades/DestacadasPropiedades";

const MainPropiedades = () => {
    return (
        <>
            <section className="flex w-full flex-col">
                {/* Banner propiedades */}
                <BannerPropiedades />
                {/* Propiedades destacadas */}
                <DestacadasPropiedades />
                {/* Barra separadora */}
                <div className="mx-8 mt-6 border-b-2 border-solid border-cafranGray-semilight/50 md:mt-0 lg:mx-[100px]"></div>
            </section>
            {/*  */}
        </>
    );
};

export default MainPropiedades;
