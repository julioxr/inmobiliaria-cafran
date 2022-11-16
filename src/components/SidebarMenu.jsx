import {
    RiFacebookCircleFill,
    RiInstagramFill,
    RiCloseFill,
} from "react-icons/ri";

const SidebarMenu = () => {
    return (
        <>
            <nav className="fixed z-30 bg-white w-2/3 h-full font-bold text-xl text-cafranGray-dark">
                <ul className="flex flex-col gap-5 justify-center ml-12 mt-40">
                    <li>Lotes</li>
                    <li>Propiedades</li>
                    <li>La empresa</li>
                    <li>Contacto</li>
                    <div className="flex gap-2 text-cafranMain-main text-[26px]">
                        <RiFacebookCircleFill />
                        <RiInstagramFill />
                    </div>
                </ul>
                <div className="absolute z-30 h-[90px] top-0 w-full">
                    <RiCloseFill className="absolute right-4 top-[27px] text-cafranGray-semilight text-4xl " />
                </div>
            </nav>
            <div className="fixed w-full h-full bg-cafranGray-dark/50 z-20"></div>
        </>
    );
};

export default SidebarMenu;
