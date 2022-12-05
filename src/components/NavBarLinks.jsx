import { NavLink } from "react-router-dom";
import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

const NavBarLinks = () => {
    return (
        <>
            <ul className="justify-center hidden md:flex">
                <li>Lotes</li>
                <li>Propiedades</li>
                <li>La empresa</li>
                <li>Contacto</li>
                <div className="flex">
                    <RiFacebookCircleFill />
                    <RiInstagramFill />
                </div>
            </ul>
        </>
    );
};

export default NavBarLinks;
