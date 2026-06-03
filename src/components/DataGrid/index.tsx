import { AgGridReact } from "ag-grid-react";
import "./DataGrid.scss";
import type { DataGridProps } from "./types";

function DataGrid<TData>({
    rowData,
    columnDefs,
    defaultColDef,
}: DataGridProps<TData>) {
    return (
        // Data Grid will fill the size of the parent container
        <div className="data-grid">
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
            />
        </div>
    );
}

export default DataGrid;
