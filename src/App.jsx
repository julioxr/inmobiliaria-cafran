import Header from "./components/Header";
import AppRouter from "./AppRouter";

function App() {
    return (
        <div className="font-primary">
            {/* El header esta fijo durante todas las rutas */}
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
