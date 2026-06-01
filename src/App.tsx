import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { useState } from "react";
import "./App.css";
import DataGrid from "./components/DataGrid";

const modules = [AllCommunityModule];

function App() {
    // Row Data: The data to be displayed.
    const [rowData, sRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" },
    ]);

    // ...

    return (
        <>
            <AgGridProvider modules={modules}>
                    <DataGrid rowData={rowData} columnDefs={colDefs} />
            </AgGridProvider>
        </>
    );
}

export default App;
