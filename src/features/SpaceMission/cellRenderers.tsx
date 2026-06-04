import type { CustomCellRendererProps } from "ag-grid-react";
import type { SpaceMission } from "./types";

// Custom Cell Renderer (Display flags based on cell value)
const CompanyLogoRenderer = ({
    value,
}: CustomCellRendererProps<SpaceMission, string>) => (
    <span
        style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
        }}
    >
        {value && (
            <img
                alt={`${value} Flag`}
                src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
                style={{
                    display: "block",
                    width: "25px",
                    height: "auto",
                    maxHeight: "50%",
                    marginRight: "12px",
                    filter: "brightness(1.1)",
                }}
            />
        )}
        <p
            style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
            }}
        >
            {value}
        </p>
    </span>
);

/* Custom Cell Renderer (Display tick / cross in 'Successful' column) */
const SuccessfulRenderer = ({
    value,
}: CustomCellRendererProps<SpaceMission, boolean>) => (
    <span
        style={{
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <img
            alt={value ? "Successful" : "Unsuccessful"}
            src={
                value
                    ? "https://www.ag-grid.com/example-assets/icons/tick-in-circle.png"
                    : "https://www.ag-grid.com/example-assets/icons/cross-in-circle.png"
            }
            style={{
                display: "block",
                width: "18px",
                height: "18px",
            }}
        />
    </span>
);

export { CompanyLogoRenderer, SuccessfulRenderer };

