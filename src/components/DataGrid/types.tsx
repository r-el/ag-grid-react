import {
    type CellValueChangedEvent,
    type ColDef,
    type GridOptions,
    type SelectionChangedEvent,
} from "ag-grid-community";

export type DataGridProps<TData> = {
    rowData: TData[];
    columnDefs: ColDef<TData>[];
    defaultColDef?: ColDef<TData>;
    pagination?: boolean;
    onCellValueChanged?: (event: CellValueChangedEvent<TData>) => void;
    onSelectionChanged?: (event: SelectionChangedEvent<TData>) => void;
    rowSelection?: GridOptions<TData>["rowSelection"];
};
