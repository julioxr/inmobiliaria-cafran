import React from "react";
import logo from "../assets/logo-cafran.svg";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center p-8 w-full h-[90px]">
                <img src={logo} alt="logo-cafran" className="w-36" />
                <RiMenuFill className="text-4xl" />
            </header>
        </>
    );
};

export default Header;
