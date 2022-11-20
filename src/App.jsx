import { useState } from "react";
import Header from "./components/Header";
import AppRouter from "./AppRouter";
import SidebarMenu from "./components/SidebarMenu";
import Footer from "./components/Footer";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className={`font-primary ${sidebarOpen ? "fixed w-full" : ""}`}>
            {/* El header esta fijo durante todas las rutas */}
            <SidebarMenu
                handleSidebar={handleSidebar}
                sidebarOpen={sidebarOpen}
            />
            <Header handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            {/* Todas las rutas de la web */}
            <AppRouter setSidebarOpen={setSidebarOpen} />
            {/* Footer fijo */}
            <Footer />
        </div>
    );
}

export default App;
