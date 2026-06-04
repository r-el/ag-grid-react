import type { ColDef } from "ag-grid-community";
import { CompanyLogoRenderer, SuccessfulRenderer } from "./cellRenderers";
import { currencyFormatter, dateFormatter } from "./formatters";
import type { SpaceMission } from "./types";

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
    {
        field: "date",
        valueFormatter: dateFormatter,
    },
    {
        field: "price",
        valueFormatter: currencyFormatter, // Return a formatted string for this column
    },
    {
        field: "successful",
        cellRenderer: SuccessfulRenderer,
    },
    { field: "rocket" },
];

export const spaceMissionDefaultColDef: ColDef<SpaceMission> = {
    filter: true,
    editable: true, // Enable editing on all cells
};
