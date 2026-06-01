import { AgGridReact } from "ag-grid-react";

function DataGrid({ rowData, columnDefs }) {
    return <AgGridReact rowData={rowData} columnDefs={columnDefs} />;
}

export default DataGrid;
