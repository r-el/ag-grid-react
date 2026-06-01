import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { useState } from "react";
import DataGrid from "../../components/DataGrid";
import { carColumnDefs } from "./columns";
import { carRowData } from "./data";

const modules = [AllCommunityModule];

function Car() {
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

export default Car;
