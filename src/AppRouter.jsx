import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import PropiedadesSection from "./components/PropiedadesSection";
import Features from "./components/Features";

const AppRouter = ({ setSidebarOpen }) => {
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route
                    path="/propiedades"
                    element={
                        <PropiedadesSection setSidebarOpen={setSidebarOpen} />
                    }
                />
                <Route path="/features" element={<Features />} />
            </Routes>
        </>
    );
};

export default AppRouter;
