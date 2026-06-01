import { AgGridReact } from "ag-grid-react";
import "./DataGrid.scss";

function DataGrid({ rowData, columnDefs }) {
    return (
        // Data Grid will fill the size of the parent container
        <div className="data-grid">
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
    );
}

export default DataGrid;
