import type { ColDef, ValueFormatterParams } from "ag-grid-community";
import { CompanyLogoRenderer } from "./cellRenderers";
import type { SpaceMission } from "./types";

const currencyFormatter = ({
    value,
}: ValueFormatterParams<SpaceMission, number>) => {
    if (typeof value !== "number") return "";

    return "£" + value.toLocaleString();
};

export const spaceMissionColumnDefs: ColDef<SpaceMission>[] = [
    {
        field: "mission",
        filter: false, // Column Definitions take precedence over Default Column Definitions
    },
    {
        field: "company",
        cellRenderer: CompanyLogoRenderer, // Add component to column via cellRenderer
    },
    { field: "location" },
    { field: "date" },
    {
        field: "price",
        valueFormatter: currencyFormatter, // Return a formatted string for this column
    },
    { field: "successful" },
    { field: "rocket" },
];

export const spaceMissionDefaultColDef: ColDef<SpaceMission> = {
    filter: true,
    editable: true, // Enable editing on all cells
};
