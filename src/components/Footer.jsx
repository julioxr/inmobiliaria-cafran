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
                <div className="flex justify-between items-start pt-8">
                    <div>
                        <ul>
                            <li>Lotes</li>
                            <li>Propiedades</li>
                            <li>La empresa</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="flex gap-3">
                        <RiFacebookCircleFill />
                        <RiInstagramFill />
                        <RiWhatsappFill />
                        <RiMailFill />
                    </div>
                </div>
                <p>
                    © 2022 Anibal Marcelo Vera | Cafran negocios inmobiliarios
                </p>
            </footer>
        </>
    );
};

export default Footer;
