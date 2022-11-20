import React from "react";
import { RiCloseFill } from "react-icons/ri";

const BotonFiltro = ({ nombre }) => {
    return (
        <div className="flex items-center text-cafranGray-dark bg-white border border-cafranGray-dark font-normal rounded-md text-[10px] h-[26px] pl-1 mr-2 mt-2 cursor-pointer">
            <h5 className="mr-4">{nombre}</h5>
            <RiCloseFill className="text-[15px] text-cafranGray-dark mr-1" />
        </div>
    );
};

export default BotonFiltro;
