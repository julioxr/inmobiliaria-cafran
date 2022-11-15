import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PropiedadesSection from "./components/PropiedadesSection";
import Features from "./components/Features";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/propiedades" element={<PropiedadesSection />} />
                <Route path="/features" element={<Features />} />
            </Routes>
        </>
    );
};

export default AppRouter;
