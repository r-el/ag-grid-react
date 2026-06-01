import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import DataGrid from "../../components/DataGrid";
import { useGridState } from "../../hooks/useGridState";
import { carColumnDefs } from "./columns";
import { carRowData } from "./data";
import type { Car as CarModel } from "./types";

const modules = [AllCommunityModule];

function Car() {
    const { rowData, columnDefs } = useGridState<CarModel>(
        carRowData,
        carColumnDefs,
    );

    return (
        <>
            <AgGridProvider modules={modules}>
                <DataGrid rowData={rowData} columnDefs={columnDefs} />
            </AgGridProvider>
        </>
    );
}

export default Car;
