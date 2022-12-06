import casa1 from "../../assets/img/casa1.jpg";

const ImageHero = () => {
    return (
        <div className="absolute inset-0 z-0">
            <img
                src={casa1}
                className="h-full w-full object-cover brightness-50 "
            />
        </div>
    );
};

export default ImageHero;
