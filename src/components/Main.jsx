import Footer from "./Footer";
import Hero from "./Hero";
import Lotes from "./Lotes";
import Nosotros from "./Nosotros";
import Propiedades from "./Propiedades";

const Main = () => {
    return (
        <>
            <Hero />
            <Lotes />
            <Propiedades />
            <Nosotros />
            <Footer />
            <div className="h-80"></div>
        </>
    );
};

export default Main;
