import { NavLink } from "react-router-dom";
import NavBarLinks from "./NavBarLinks.jsx";
import logo from "../assets/logo-cafran.svg";
import logoLargoAnibal from "../assets/logo-largo-anibal.svg";
import { RiMenu3Line } from "react-icons/ri";

const Header = ({ handleSidebar, sidebarOpen }) => {
    return (
        <>
            <header className="flex h-[90px] w-full items-center justify-between p-8 shadow-md shadow-cafranGray-semilight/10 lg:px-[96px] ">
                <NavLink to={"/"}>
                    <div className="flex items-center justify-center gap-4">
                        <img
                            src={logo}
                            alt="logo-cafran"
                            className="h-[34px] cursor-pointer lg:h-[30px] lg:pr-4"
                        />
                        <div className="hidden h-10 border-[1px] border-solid border-cafranMain-main lg:block"></div>
                        <img
                            src={logoLargoAnibal}
                            alt="logo-anibal"
                            className="hidden h-[74px] lg:block"
                        />
                    </div>
                </NavLink>

                <NavBarLinks />

                <RiMenu3Line
                    className={`cursor-pointer text-4xl text-cafranGray-semiDark transition-all duration-500 ${
                        sidebarOpen ? "opacity-0" : "opacity-100"
                    } lg:hidden`}
                    onClick={handleSidebar}
                />
            </header>
        </>
    );
};

export default Header;
