import type { ColDef } from "ag-grid-community";
import { useState } from "react";

export function useGridState<TData>(
    initialRowData: TData[],
    initialColumnDefs: ColDef<TData>[],
) {
    const [rowData, setRowData] = useState<TData[]>(() => [...initialRowData]);
    const [columnDefs, setColumnDefs] = useState<ColDef<TData>[]>(() => [
        ...initialColumnDefs,
    ]);

    return { rowData, setRowData, columnDefs, setColumnDefs };
}
