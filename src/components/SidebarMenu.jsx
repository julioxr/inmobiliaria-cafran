import { Link, NavLink } from "react-router-dom";
import {
    RiFacebookCircleFill,
    RiInstagramFill,
    RiCloseFill,
} from "react-icons/ri";

const SidebarMenu = ({ sidebarOpen, handleSidebar }) => {
    console.log(sidebarOpen);
    return (
        <>
            <nav
                className={`${
                    sidebarOpen ? "left-0" : "-left-full"
                } fixed z-30 transition-all duration-500 ease-in-out`}
            >
                <div className="fixed z-30 bg-white w-2/3 h-full font-bold text-xl text-cafranGray-dark ">
                    <ul className="flex flex-col gap-5 justify-center ml-12 mt-40">
                        <li className="cursor-pointer">Lotes</li>
                        <li className="cursor-pointer">Propiedades</li>
                        <li className="cursor-pointer">La empresa</li>
                        <li className="cursor-pointer">Contacto</li>
                        <div className="flex gap-2 text-cafranMain-main text-[26px]">
                            <RiFacebookCircleFill />
                            <RiInstagramFill />
                        </div>
                    </ul>
                    <div className="absolute z-30 h-[90px] top-0 w-full">
                        <RiCloseFill
                            className="absolute right-4 top-[27px] text-cafranGray-semiDark text-[37px] cursor-pointer"
                            onClick={handleSidebar}
                        />
                    </div>
                </div>
            </nav>
            <div
                onClick={handleSidebar}
                className={`absolute w-full h-full  bg-cafranGray-dark transition-all duration-500 ease-in ${
                    sidebarOpen ? "bg-opacity-25 z-20" : "bg-opacity-0 -z-10"
                }`}
            ></div>
        </>
    );
};

export default SidebarMenu;
