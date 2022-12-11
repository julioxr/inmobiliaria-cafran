const TextoPrincipalNosotros = () => {
    return (
        <div className="px-8 md:max-w-[530px] md:px-4 lg:max-w-[740px] lg:pl-8">
            {/* Info principal */}
            <h2 className="text-[34px] font-bold text-cafranGray-semiDark/70 md:pb-6 md:text-[40px] md:font-semibold">
                Nosotros
            </h2>
            <p className="text-[13px] font-light text-cafranGray-dark md:text-base">
                Acompañando sueños de viviendas desde ..... años. Nos
                encontramos en la ciudad de Zárate, pero nuestros negocios
                inmobiliarios abarcan las zonas de
            </p>
            <p className="text-[13px] font-light text-cafranGray-dark md:mt-5 md:text-base">
                Acompañando sueños de viviendas desde ..... años. Nos
                encontramos en la ciudad de Zárate, pero nuestros negocios
                inmobiliarios abarcan las zonas de ....
            </p>
            {/* Destacado barra roja */}
            <div className="my-4 flex h-[45px] gap-3 lg:my-8">
                <div className="border-l-[5px] border-solid border-cafranMain-secondary"></div>
                <h3 className="self-center text-base font-semibold text-cafranGray-semiDark md:text-lg">
                    La dedicación y profesionalismo que nos caracteriza siempre.
                </h3>
            </div>
            {/* Info secundaria */}
            <p className="text-[13px] font-light text-cafranGray-dark md:text-base">
                Adaptamos nuestra imagen a los requerimientos actuales,
                combinando la identidad de siempre con la marca personal Marcelo
                Anibal Vera.
            </p>
        </div>
    );
};

export default TextoPrincipalNosotros;
