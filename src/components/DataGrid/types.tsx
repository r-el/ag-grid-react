import { type CellValueChangedEvent, type ColDef } from "ag-grid-community";

export type DataGridProps<TData> = {
    rowData: TData[];
    columnDefs: ColDef<TData>[];
    defaultColDef?: ColDef<TData>;
    pagination?: boolean;
    onCellValueChanged?: (event: CellValueChangedEvent<TData>) => void;
};
