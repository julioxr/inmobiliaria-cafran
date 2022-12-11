import BotonVerMas from "./BotonVerMas";
import CardChicaPropiedades from "./CardChicaPropiedades";

const DestacadasPropiedades = () => {
    return (
        <div className="bg-cafranGray-light/25 pt-4 md:bg-transparent md:pt-8 lg:pt-11">
            {/* Titulo */}
            <h3 className="mt-2 px-8 text-lg font-bold text-cafranGray-semiDark md:text-2xl md:font-semibold lg:px-32">
                Propiedades destacadas
            </h3>
            {/* Barra separadora */}
            <div className="mx-8 mb-10 mt-6 hidden border-b-2 border-solid border-cafranGray-semilight/50 md:block lg:mx-[100px]"></div>

            {/* Grupo de Cards */}
            <div className="mt-4 flex gap-4 overflow-scroll pl-8 md:mx-auto md:grid md:max-w-[815px] md:grid-cols-2 md:place-items-center md:overflow-auto md:px-8 lg:max-w-[1220px] lg:grid-cols-3 2xl:max-w-[1440px] 2xl:grid-cols-4">
                <CardChicaPropiedades src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/187815/pexels-photo-187815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/7475597/pexels-photo-7475597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/5353946/pexels-photo-5353946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/919068/pexels-photo-919068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>

            {/* Boton ver mas */}
            <BotonVerMas />

            {/* Barra separadora */}
            {/* <div className="mx-8 mb-10 mt-6 hidden border-b-2 border-solid border-cafranGray-semilight/50 md:block lg:mx-[100px]"></div> */}
        </div>
    );
};

export default DestacadasPropiedades;
