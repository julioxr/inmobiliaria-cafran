import Lote from "../../assets/img/lote.jpg";

const SliderLotes = () => {
    return (
        <>
            {/*Hacer el alto flexible con flex*/}
            <div className="-z-10 order-2 mt-6 h-[390px] overflow-x-hidden sm:mt-9 sm:h-[594px] md:col-span-8 md:row-span-2 md:mt-0 md:h-[682px] lg:col-span-9 lg:h-[800px] ">
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
