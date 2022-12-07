import { RiArrowRightLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const BannerPropiedades = () => {
    return (
        <div className="flex h-[160px] w-[333px] flex-col items-end justify-center gap-2 self-end rounded-tl-md rounded-bl-md bg-cafranGray-dark pr-8 text-white">
            <h2 className="text-[32px] font-bold ">Propiedades</h2>
            <p className="-mt-2 mb-2 text-[13px] font-medium">
                Descubrí las propiedades en venta y alquiler
            </p>
            <div className="relative flex items-center">
                <NavLink to="/propiedades">
                    <button
                        type="button"
                        className="mb-2 h-[43px] w-[157px] cursor-pointer rounded-md border border-cafranMain-secondary bg-cafranMain-secondary py-2.5 pl-8 text-left text-sm font-normal text-white hover:border-cafranMain-secondary/80 hover:bg-cafranMain-secondary/80"
                    >
                        Ver todas
                    </button>
                </NavLink>
                <RiArrowRightLine className="absolute right-6 mb-2 cursor-pointer text-xl" />
            </div>
        </div>
    );
};

export default BannerPropiedades;
