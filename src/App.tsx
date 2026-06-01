import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { useState } from "react";
import "./App.css";
import DataGrid from "./components/DataGrid";
import { carRowData } from "./features/cars/data";
import { carColumnDefs } from "./features/cars/columns";

const modules = [AllCommunityModule];

function App() {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState(carRowData);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState(carColumnDefs);

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
