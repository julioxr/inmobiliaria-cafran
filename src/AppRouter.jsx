import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import PropiedadesSection from "./components/PropiedadesSection";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<Hero />} />
                <Route path="/propiedades" element={<PropiedadesSection />} />
            </Routes>
        </>
    );
};

export default AppRouter;
