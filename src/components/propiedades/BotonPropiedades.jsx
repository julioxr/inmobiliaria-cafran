import { NavLink } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

const BotonPropiedades = () => {
    return (
        <div className="relative flex items-center">
            <NavLink to="/propiedades">
                <button
                    type="button"
                    className="mb-2 h-[40px] w-[144px] cursor-pointer rounded-md border border-cafranMain-secondary bg-cafranMain-secondary py-2.5 pl-8 text-left text-sm font-medium text-white hover:border-cafranMain-secondary/80 hover:bg-cafranMain-secondary/80 md:h-[50px] md:w-[265px] md:pl-20 md:text-base md:font-bold"
                >
                    Ver todas
                </button>
            </NavLink>
            <RiArrowRightLine className="absolute right-4 mb-2 h-[40px] cursor-pointer text-xl md:right-16" />
        </div>
    );
};

export default BotonPropiedades;
