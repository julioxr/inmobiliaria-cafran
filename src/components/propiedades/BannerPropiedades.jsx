import BotonPropiedades from "./BotonPropiedades";
import TextBannerPropiedades from "./TextBannerPropiedades";

const BannerPropiedades = () => {
    return (
        <div className="ml-8 flex h-[170px] flex-col items-end justify-center gap-2 rounded-tl-md rounded-bl-md bg-cafranGray-dark pr-8 text-white sm:h-[176px] md:ml-0 md:h-[250px] md:items-start md:rounded-none md:pl-8 lg:pl-[130px]">
            <TextBannerPropiedades />
            <BotonPropiedades />
        </div>
    );
};

export default BannerPropiedades;
