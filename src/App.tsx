import "./App.css";
import Car from "./features/cars";
import SpaceMission from "./features/SpaceMission";

function App() {
    return (
        <>
            {/* https://www.ag-grid.com/react-data-grid/getting-started/ */}
            <Car />
            {/* https://www.ag-grid.com/react-data-grid/deep-dive/#create-a-basic-grid */}
            <SpaceMission />
        </>
    );
}

export default App;
