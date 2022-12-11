const TextoPrincipalNosotros = () => {
    return (
        <div className="px-8">
            {/* Info principal */}
            <h2 className="text-[34px] font-bold text-cafranGray-semiDark/70">
                Nosotros
            </h2>
            <p className="text-[13px] text-cafranGray-dark">
                Acompañando sueños de viviendas desde ..... años. Nos
                encontramos en la ciudad de Zárate, pero nuestros negocios
                inmobiliarios abarcan las zonas de .... Acompañando sueños de
                viviendas desde ..... años. Nos encontramos en la ciudad de
                Zárate, pero nuestros negocios inmobiliarios abarcan las zonas
            </p>
            {/* Destacado barra roja */}
            <div className="my-4 flex h-[45px] gap-3">
                <div className="border-l-[5px] border-solid border-cafranMain-secondary"></div>
                <h3 className="self-center text-base font-semibold text-cafranGray-semiDark">
                    La dedicación y profesionalismo que nos caracteriza siempre.
                </h3>
            </div>
            {/* Info secundaria */}
            <p className="text-[13px] font-light text-cafranGray-dark">
                Adaptamos nuestra imagen a los requerimientos actuales,
                combinando la identidad de siempre con la marca personal Marcelo
                Anibal Vera.
            </p>
        </div>
    );
};

export default TextoPrincipalNosotros;
