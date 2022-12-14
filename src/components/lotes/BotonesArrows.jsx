import LeftArrow from "../../assets/left-arrow-circle.svg";
import RightArrow from "../../assets/right-arrow-circle.svg";

const BotonesArrows = () => {
    return (
        <>
            <div className="absolute right-8 bottom-36 z-10 order-5 flex md:bottom-32 md:left-52 lg:left-80 lg:bottom-16">
                <img src={LeftArrow} alt="" />
                <img src={RightArrow} alt="" />
            </div>
        </>
    );
};

export default BotonesArrows;
