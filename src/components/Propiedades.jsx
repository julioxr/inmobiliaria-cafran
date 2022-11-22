import { RiArrowRightLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import CardDestacada from "./CardDestacada";

const Propiedades = () => {
    return (
        <>
            <section className="w-full flex flex-col">
                {/* Titulo propiedades */}
                <div className="bg-cafranGray-dark text-white rounded-tl-md rounded-bl-md h-[160px] w-[333px] flex flex-col justify-center items-end gap-2 self-end pr-8">
                    <h2 className="font-bold text-[32px] ">Propiedades</h2>
                    <p className="text-[13px] font-medium -mt-2 mb-2">
                        Descubrí las propiedades en venta y alquiler
                    </p>
                    <div className="flex items-center relative">
                        <NavLink to="/propiedades">
                            <button
                                type="button"
                                className="text-white border border-cafranMain-secondary bg-cafranMain-secondary text-left pl-8 mb-2 font-normal rounded-md text-sm w-[157px] h-[43px] py-2.5 hover:bg-cafranMain-secondary/80 hover:border-cafranMain-secondary/80 cursor-pointer"
                            >
                                Ver todas
                            </button>
                        </NavLink>
                        <RiArrowRightLine className="absolute right-6 text-xl mb-2 cursor-pointer" />
                    </div>
                </div>
                {/* Propiedades destacadas */}
                <div className="bg-cafranGray-light/25 mt-6 pb-6">
                    <h3 className="font-bold text-lg mt-2 px-8 text-cafranGray-semiDark">
                        Propiedades destacadas
                    </h3>
                    <div className="flex gap-4 mt-4 pl-8 pr-4 overflow-scroll">
                        <CardDestacada src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        <CardDestacada src="https://images.pexels.com/photos/187815/pexels-photo-187815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <CardDestacada src="https://images.pexels.com/photos/7475597/pexels-photo-7475597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <CardDestacada src="https://images.pexels.com/photos/5353946/pexels-photo-5353946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                </div>
                {/* Barra separadora */}
                <div className="border-solid border-b-2 mt-6  border-cafranGray-semilight/50 mx-12"></div>
            </section>
            {/*  */}
        </>
    );
};

export default Propiedades;
