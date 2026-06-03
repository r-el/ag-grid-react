import type { ColDef } from "ag-grid-community";
import type { SpaceMission } from "./types";

export const spaceMissionColumnDefs: ColDef<SpaceMission>[] = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
];
