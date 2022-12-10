import { RiShareLine } from "react-icons/ri";

const BotonCompartir = () => {
    return (
        <button
            type="button"
            className="hidden h-[43px] w-[125px] bg-white px-1 py-2.5 text-center text-base font-normal text-cafranGray-dark hover:bg-cafranGray-dark hover:text-white sm:flex md:order-3 md:col-span-1"
        >
            Compartir
            <RiShareLine className="hidden text-2xl text-cafranGray-dark sm:ml-4 sm:block" />
        </button>
    );
};

export default BotonCompartir;
