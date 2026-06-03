import type { ColDef } from "ag-grid-community";
import type { SpaceMission } from "./types";

export const spaceMissionColumnDefs: ColDef<SpaceMission>[] = [
    { field: "mission", filter: false }, // Column Definitions take precedence over Default Column Definitions
    { field: "company" },
    { field: "location" },
    { field: "date" },
    {
        field: "price",
        // Return a formatted string for this column
        valueFormatter: (params) => {
            return "£" + params.value.toLocaleString();
        },
    },
    { field: "successful" },
    { field: "rocket" },
];

export const spaceMissionDefaultColDef: ColDef<SpaceMission> = {
    filter: true,
};
