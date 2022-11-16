import { RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

const SidebarMenu = () => {
    return (
        <>
            <nav className="fixed z-50 bg-white w-2/3 h-full font-bold text-xl text-cafranGray-dark">
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
            </nav>
        </>
    );
};

export default SidebarMenu;
