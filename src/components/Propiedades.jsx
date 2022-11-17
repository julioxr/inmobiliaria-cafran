import { RiArrowRightLine } from "react-icons/ri";
import CardDestacada from "./CardDestacada";

const Propiedades = () => {
    return (
        <>
            <section className="h-[540px] w-full  flex flex-col">
                {/* Titulo propiedades */}
                <div className="bg-cafranGray-dark text-white rounded-md h-[160px] w-[333px] flex flex-col justify-center items-end gap-2 self-end pr-8">
                    <h2 className="font-bold text-[32px] ">Propiedades</h2>
                    <p className="text-[13px] font-medium -mt-2 mb-2">
                        Descubrí las propiedades en venta y alquiler
                    </p>
                    <div className="flex items-center relative">
                        <button
                            type="button"
                            className="text-white border border-cafranMain-secondary bg-cafranMain-secondary text-left pl-8 mb-2 font-normal rounded-md text-sm w-[157px] h-[43px] py-2.5 hover:bg-cafranMain-secondary/80 hover:border-cafranMain-secondary/80 cursor-pointer"
                        >
                            Ver todas
                        </button>
                        <RiArrowRightLine className="absolute right-6 text-xl mb-2 cursor-pointer" />
                    </div>
                </div>
                {/* Propiedades destacadas */}
                <div className="h-[302px] bg-cafranGray-light/25 mt-5">
                    <h3 className="font-bold text-lg mt-5 ">
                        Propiedades destacadas
                    </h3>
                    <CardDestacada />
                </div>
                {/* Barra separadora */}
                <div className="border-solid border-b-2 mt-6  border-cafranGray-semilight/50 mx-12"></div>
            </section>
            {/*  */}
        </>
    );
};

export default Propiedades;
