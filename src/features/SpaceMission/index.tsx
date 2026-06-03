import { AllCommunityModule, type ColDef } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import DataGrid from "../../components/DataGrid";
import { spaceMissionColumnDefs, spaceMissionDefaultColDef } from "./columns";
import { handleSpaceMissionCellValueChanged } from "./eventHandlers";
import type { SpaceMission } from "./types";

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

    // Apply settings across all columns
    const defaultColDef = useMemo<ColDef<SpaceMission>>(
        () => spaceMissionDefaultColDef,
        [],
    );

    return (
        <>
            <AgGridProvider modules={modules}>
                <DataGrid
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    pagination={true} // Enable Pagination
                    onCellValueChanged={handleSpaceMissionCellValueChanged} // Hook into CellValueChanged event and log value
                />
            </AgGridProvider>
        </>
    );
}

export default SpaceMission;
