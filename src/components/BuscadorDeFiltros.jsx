import { RiSearchLine } from "react-icons/ri";

const Buscador = () => {
    return (
        <>
            <form action="#" className="flex justify-center mt-6 relative">
                <input
                    className="w-[326px] h-[53px] rounded text-[14px] bg-white text-cafranGray-semiDark p-4 outline-none border-cafranGray-dark border-[1px]"
                    type="text"
                    placeholder="Buscar..."
                />
                <div className="w-[326px] absolute">
                    <RiSearchLine className="absolute right-0 rounded-tr rounded-br text-cafranGray-semiDark h-[53px] w-[53px] p-4 cursor-pointer" />
                </div>
            </form>
        </>
    );
};

export default Buscador;
