import type { ColDef } from "ag-grid-community";
import type { SpaceMission } from "./types";

const currencyFormatter = (params) => "£" + params.value.toLocaleString();

export const spaceMissionColumnDefs: ColDef<SpaceMission>[] = [
    { field: "mission", filter: false }, // Column Definitions take precedence over Default Column Definitions
    { field: "company" },
    { field: "location" },
    { field: "date" },
    {
        field: "price",
        // Return a formatted string for this column
        valueFormatter: currencyFormatter,
    },
    { field: "successful" },
    { field: "rocket" },
];

export const spaceMissionDefaultColDef: ColDef<SpaceMission> = {
    filter: true,
};
