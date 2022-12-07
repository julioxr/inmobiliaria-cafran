import CardChicaPropiedades from "./CardChicaPropiedades";

const DestacadasPropiedades = () => {
    return (
        <div className="mt-6 bg-cafranGray-light/25 pb-6">
            {/* Titulo */}
            <h3 className="mt-2 px-8 text-lg font-bold text-cafranGray-semiDark">
                Propiedades destacadas
            </h3>

            {/* Grupo de Cards */}
            <div className="mt-4 flex gap-4 overflow-scroll pl-8 pr-4">
                <CardChicaPropiedades src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/187815/pexels-photo-187815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/7475597/pexels-photo-7475597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <CardChicaPropiedades src="https://images.pexels.com/photos/5353946/pexels-photo-5353946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>
    );
};

export default DestacadasPropiedades;
