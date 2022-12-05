import { NavLink } from "react-router-dom";
import NavBarLinks from "./NavBarLinks.jsx";
import logo from "../assets/logo-cafran.svg";
import logoLargoAnibal from "../assets/logo-largo-anibal.svg";
import { RiMenu3Line } from "react-icons/ri";

const Header = ({ handleSidebar, sidebarOpen }) => {
    return (
        <>
            <header className="flex justify-between items-center p-8 w-full h-[90px] shadow-md shadow-cafranGray-semilight/10">
                <NavLink to={"/"}>
                    <div className="flex">
                        <img
                            src={logo}
                            alt="logo-cafran"
                            className="w-36 cursor-pointer"
                        />
                        <img
                            src={logoLargoAnibal}
                            alt="logo-anibal"
                            className="hidden md:block"
                        />
                    </div>
                </NavLink>

                <NavBarLinks />

                <RiMenu3Line
                    className={`text-4xl cursor-pointer text-cafranGray-semiDark transition-all duration-500 ${
                        sidebarOpen ? "opacity-0" : "opacity-100"
                    } md:hidden`}
                    onClick={handleSidebar}
                />
            </header>
        </>
    );
};

export default Header;
