import { NavLink } from "react-router-dom";
import NavBarLinks from "./NavBarLinks.jsx";
import logo from "../assets/logo-cafran.svg";
import logoLargoAnibal from "../assets/logo-largo-anibal.svg";
import { RiMenu3Line } from "react-icons/ri";
import ellipse39 from "../assets/ellipse39.svg";

const Header = ({ handleSidebar, sidebarOpen }) => {
    return (
        <>
            <header className="flex h-[90px] w-full items-center justify-between p-8 shadow-md shadow-cafranGray-semilight/10 lg:px-[96px] ">
                <NavLink to={"/"}>
                    {/* logos del header */}
                    <div className="flex items-center justify-center gap-4">
                        <img
                            src={logo}
                            alt="logo-cafran"
                            className="h-[34px] cursor-pointer sm:pr-4 lg:h-[30px]"
                        />
                        <img
                            src={ellipse39}
                            alt=""
                            className="hidden sm:block"
                        />
                        <img
                            src={logoLargoAnibal}
                            alt="logo-anibal"
                            className="hidden h-[74px] sm:block"
                        />
                    </div>
                </NavLink>

                {/* Links de navbar solo desde lg */}
                <NavBarLinks />

                {/* Menu hamburguesa */}
                <RiMenu3Line
                    className={`cursor-pointer text-4xl text-cafranGray-semiDark transition-all duration-500 ${
                        sidebarOpen ? "opacity-0" : "opacity-100"
                    } xl:hidden`}
                    onClick={handleSidebar}
                />
            </header>
        </>
    );
};

export default Header;
