import type { ValueFormatterParams } from "ag-grid-community";
import type { SpaceMission } from "./types";

const currencyFormatter = ({
    value,
}: ValueFormatterParams<SpaceMission, number>) => {
    if (typeof value !== "number") return "";

    return "£" + value.toLocaleString();
};

function dateFormatter({ value }: ValueFormatterParams<SpaceMission, string>) {
    if (typeof value !== "string") return "";

    return new Date(value).toLocaleDateString();
}

export { dateFormatter, currencyFormatter };
