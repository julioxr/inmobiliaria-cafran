import React from "react";
import {
    RiFacebookCircleFill,
    RiInstagramFill,
    RiWhatsappFill,
    RiMailFill,
} from "react-icons/ri";

const Footer = () => {
    return (
        <>
            <footer className="h-[215px] bg-cafranGray-semiDark text-white  px-8">
                <div className="flex justify-between items-start pt-[52px]">
                    <div>
                        <ul className="text-[14px] flex flex-col gap-[3px] mb-[34px]">
                            <li>Lotes</li>
                            <li>Propiedades</li>
                            <li>La empresa</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="flex gap-[9px]">
                        <RiFacebookCircleFill className="w-[30px] h-[30px]" />
                        <RiInstagramFill className="w-[30px] h-[30px]" />
                        <RiWhatsappFill className="w-[30px] h-[30px]" />
                        <RiMailFill className="w-[30px] h-[30px]" />
                    </div>
                </div>
                <p className="text-[10px]  text-center">
                    © 2022 Anibal Marcelo Vera | Cafran negocios inmobiliarios
                </p>
            </footer>
        </>
    );
};

export default Footer;
