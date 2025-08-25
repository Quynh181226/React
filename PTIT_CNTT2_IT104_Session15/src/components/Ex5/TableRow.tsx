type PropType = {
    count: number;
    id: string;
    name: string;
    dob: string;
    email: string;
    status: string
};
export const TableRow = (prop: PropType) => {
    const statusStyle =
        prop.status === "active"
            ? {
                backgroundColor: "#d1f7d1",
                color: "#28a745",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "14px",
                border: "1px solid #28a745",
            }
            : {
                backgroundColor: "#ffd6d6",
                color: "#ff3b3b",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "14px",
                border: "1px solid #ff3b3b",
            };
    const buttonStyle = (bgColor: string, borderColor: string) => ({
        padding: "5px 12px",
        marginRight: "6px",
        borderRadius: "6px",
        border: `1px solid ${borderColor}`,
        backgroundColor: bgColor,
        color: borderColor,
        cursor: "pointer",
        fontSize: "14px",
    })
    return (
        <tr>
            <td>{prop.count}</td>
            <td>{prop.id}</td>
            <td>{prop.name}</td>
            <td>{prop.dob}</td>
            <td>{prop.email}</td>
            <td style={{ padding: "10px", textAlign: "center" }}>
        <span style={statusStyle}>
          {prop.status === "active" ? "Active" : "Inactive"}
        </span>
            </td>

            <td style={{ padding: "10px", textAlign: "center" }}>
                <button style={buttonStyle("#f4e8ff", "#a64eff")}>Block</button>
                <button style={buttonStyle("#fff3e0", "#ff9800")}>Edit</button>
                <button style={buttonStyle("#ffeaea", "#ff3b3b")}>Del</button>
            </td>
        </tr>
    )
}