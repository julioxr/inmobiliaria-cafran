import { RiShareLine } from "react-icons/ri";
import BotonCompartir from "./BotonCompartir";
import BotonInformacionLotes from "./BotonInformacionLotes";
import BotonPlanoLotes from "./BotonPlanoLotes";

const BotonesLotes = () => {
    return (
        <>
            <div className="z-10 order-4 -mt-3 flex max-w-[380px] items-center gap-4 pl-8 sm:max-w-[500px] md:order-3 md:col-span-4 md:-mt-[265px] md:grid md:h-[106px] md:max-w-[258px] md:pl-12 lg:-mt-[310px] lg:max-w-[276px] lg:pl-[100px]">
                <BotonPlanoLotes />
                <BotonInformacionLotes />
                <BotonCompartir />
                <RiShareLine className="text-2xl text-cafranGray-dark sm:hidden" />
            </div>
        </>
    );
};

export default BotonesLotes;
