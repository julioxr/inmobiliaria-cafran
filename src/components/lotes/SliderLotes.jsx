import Lote from "../../assets/img/lote.jpg";

const SliderLotes = () => {
    return (
        <>
            {/*Hacer el alto flexible con flex*/}
            <div className="-z-10 mt-6 h-[390px] sm:mt-9 sm:h-[594px] md:col-span-8 md:row-span-2 md:mt-0 md:h-[682px] lg:h-[980px]">
                {/* Foto carousel */}
                <img
                    src={Lote}
                    alt="imagen de un lote sin construir"
                    className="ml-12 h-full w-auto rounded-bl-2xl rounded-tl-2xl object-cover md:ml-0"
                />
            </div>
        </>
    );
};

export default SliderLotes;
