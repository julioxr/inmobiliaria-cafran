import { useState } from "react";
import Header from "./components/Header";
import AppRouter from "./AppRouter";
import SidebarMenu from "./components/SidebarMenu";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className={`font-primary ${sidebarOpen ? "fixed" : ""}`}>
            {/* El header esta fijo durante todas las rutas */}
            <SidebarMenu
                handleSidebar={handleSidebar}
                sidebarOpen={sidebarOpen}
            />
            <Header handleSidebar={handleSidebar} sidebarOpen={sidebarOpen} />
            <AppRouter />
        </div>
    );
}

export default App;
