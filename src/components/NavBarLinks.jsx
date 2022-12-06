import { NavLink } from "react-router-dom";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

const NavBarLinks = () => {
    return (
        <>
            <ul className="hidden items-center justify-center text-sm text-cafranGray-medium lg:flex">
                <li className="pr-12">Lotes</li>
                <li className="pr-12">Propiedades</li>
                <li className="pr-12">La empresa</li>
                <li className="pr-5">Contacto</li>
                <div className=" flex gap-[6px] text-[21px] text-cafranMain-main">
                    <RiFacebookCircleFill />
                    <RiInstagramFill />
                </div>
            </ul>
        </>
    );
};

export default NavBarLinks;
