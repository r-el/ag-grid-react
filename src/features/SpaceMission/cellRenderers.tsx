// Custom Cell Renderer (Display flags based on cell value)
export const CompanyLogoRenderer = ({ value }) => (
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
