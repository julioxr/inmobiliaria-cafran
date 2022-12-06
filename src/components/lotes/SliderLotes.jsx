import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import Lote from "../../assets/img/lote.jpg";

const SliderLotes = () => {
    return (
        <>
            {/*Hacer el alto flexible con flex*/}
            <div className="relative -z-10 mt-6 h-[400px] sm:col-span-3 sm:row-span-2 sm:h-[574px] lg:h-[680px] xl:h-[1025px]">
                {/* Foto carousel */}
                <img
                    src={Lote}
                    alt="imagen de un lote sin construir"
                    className="ml-12 h-full w-auto rounded-bl-lg object-cover sm:ml-0"
                />
                {/* Puntos de desplazamiento */}
                <div className="absolute bottom-[10px] right-12 flex gap-2 text-[8px] text-white">
                    <RiCheckboxBlankCircleFill />
                    <RiCheckboxBlankCircleFill />
                    <RiCheckboxBlankCircleFill />
                    <RiCheckboxBlankCircleFill />
                </div>
            </div>
        </>
    );
};

export default SliderLotes;
