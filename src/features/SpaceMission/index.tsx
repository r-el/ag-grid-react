import { AllCommunityModule, type ColDef } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { useEffect, useState } from "react";
import DataGrid from "../../components/DataGrid";
import type { SpaceMission } from "./types";
import { spaceMissionColumnDefs } from "./columns";

const modules = [AllCommunityModule];

function SpaceMission() {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<SpaceMission[]>([]);

    // Column Definition: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState<ColDef<SpaceMission>[]>(
        spaceMissionColumnDefs,
    );

    // Fetch data & update rowData state
    useEffect(() => {
        fetch("https://www.ag-grid.com/example-assets/space-mission-data.json") // Fetch data from server
            .then((result) => result.json()) // Convert to JSON
            .then((rowData) => setRowData(rowData)); // Update state of `rowData`
    }, []);

    return (
        <>
            <AgGridProvider modules={modules}>
                <DataGrid rowData={rowData} columnDefs={colDefs} />
            </AgGridProvider>
        </>
    );
}

export default SpaceMission;
