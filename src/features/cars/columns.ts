import type { ColDef } from "ag-grid-community";
import type { Car } from "./types";

export const carColumnDefs: ColDef<Car>[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
];
