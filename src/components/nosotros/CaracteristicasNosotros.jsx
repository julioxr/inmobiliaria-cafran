import IconsNosotros from "./IconsNosotros";

const CaracteristicasNosotros = () => {
    return (
        <div className="mx-auto mb-4 h-auto w-[300px] sm:w-full md:mt-10 lg:mt-16 ">
            <h2 className="mb-10 w-auto text-base font-semibold text-cafranGray-semiDark sm:text-center md:text-xl">
                ¿Por qué elegirnos en tu operación?
            </h2>
            <div className="lg:mr-[100px]lg:gap-16 flex flex-col items-center justify-center gap-3 text-cafranGray-dark sm:flex-row sm:gap-6 md:gap-14">
                <IconsNosotros />
            </div>
        </div>
    );
};

export default CaracteristicasNosotros;
