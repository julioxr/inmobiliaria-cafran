import Header from "./components/Header";
import AppRouter from "./AppRouter";
import SidebarMenu from "./components/SidebarMenu";

function App() {
    return (
        <div className="font-primary">
            {/* El header esta fijo durante todas las rutas */}
            <SidebarMenu />
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
