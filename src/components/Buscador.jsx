import { RiSearchLine } from "react-icons/ri";

const Buscador = () => {
    return (
        <>
            <form action="#" className="flex justify-center mt-2 relative">
                <input
                    className="w-[300px] h-[53px] rounded text-xs bg-white text-cafranGray-semiDark p-4 outline-none"
                    type="text"
                    placeholder="Buscar por Localidad, Barrio, Calle..."
                />
                <div className="w-[300px] absolute">
                    <RiSearchLine className="absolute right-0 rounded-tr rounded-br bg-cafranMain-secondary text-white h-[53px] w-[53px] p-4 cursor-pointer" />
                </div>
            </form>
        </>
    );
};

export default Buscador;
