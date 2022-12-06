import { RiSearchLine } from "react-icons/ri";

const Buscador = () => {
    return (
        <>
            <form action="#" className="relative mt-2 flex justify-center">
                <input
                    className="h-[53px] w-[300px] rounded bg-white p-4 text-xs text-cafranGray-semiDark outline-none sm:w-[422px] lg:text-sm"
                    type="text"
                    placeholder="Buscar por Localidad, Barrio, Calle..."
                />
                <div className="absolute w-[300px] sm:w-[422px]">
                    <RiSearchLine className="absolute right-0 h-[53px] w-[53px] cursor-pointer rounded-tr rounded-br bg-cafranMain-secondary p-4 text-white" />
                </div>
            </form>
        </>
    );
};

export default Buscador;
