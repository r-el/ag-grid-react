import type { CellValueChangedEvent } from "ag-grid-community";
import type { SpaceMission } from "./types";

export function handleSpaceMissionCellValueChanged(
    event: CellValueChangedEvent<
        SpaceMission,
        SpaceMission[keyof SpaceMission]
    >,
) {
    console.log(`New Cell Value: ${event.value}`);
}
