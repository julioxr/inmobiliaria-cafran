import { RiShareLine } from "react-icons/ri";

const BotonesLotes = () => {
    return (
        <>
            <div className="z-10 row-span-1 -mt-3 flex items-center justify-between px-8">
                <button
                    type="button"
                    className="h-[43px] w-[103px] rounded-md border  border-cafranGray-dark bg-white px-1 py-2.5 text-center text-sm font-normal text-cafranGray-dark hover:bg-cafranGray-dark hover:text-white"
                >
                    Ver Plano
                </button>
                <button
                    type="button"
                    className="h-[43px] w-[157px] rounded-md border border-cafranMain-main bg-cafranMain-main px-5 py-2.5 text-center text-sm font-normal text-white hover:border-cafranMain-main/80 hover:bg-cafranMain-main/80"
                >
                    Más información
                </button>
                <RiShareLine className="text-2xl text-cafranGray-dark" />
            </div>
        </>
    );
};

export default BotonesLotes;
