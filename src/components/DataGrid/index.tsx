import { AgGridReact } from "ag-grid-react";

function DataGrid({ rowData, columnDefs }) {
    return (
        // Data Grid will fill the size of the parent container
        <div style={{ height: 500 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
    );
}

export default DataGrid;
