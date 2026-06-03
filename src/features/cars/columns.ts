import type { ColDef, ValueFormatterParams } from "ag-grid-community";
import type { Car } from "./types";

const currencyFormatter = ({ value }: ValueFormatterParams<Car, number>) => {
    if (typeof value !== "number") {
        return "";
    }

    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    });
};

export const carColumnDefs: ColDef<Car>[] = [
    { field: "make" },
    { field: "model" },
    { field: "price", valueFormatter: currencyFormatter },
    { field: "electric" },
];

export const carDefaultColDef: ColDef<Car> = {
    sortable: true,
    filter: true,
    resizable: true,
};
