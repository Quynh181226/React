export const Pagination = () => {
    const btnStyle = {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        cursor: "pointer",
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none" as const,
    }

    const activeBtnStyle = {
        ...btnStyle,
        border: "1px solid #0d6efd",
        backgroundColor: "#0d6efd",
        color: "white",
    }

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "20px" }}>
            <button style={btnStyle} aria-label="Previous page">{"<"}</button>
            <button style={activeBtnStyle}>1</button>
            <button style={btnStyle}>2</button>
            <button style={btnStyle}>3</button>
            <button style={btnStyle} aria-label="Next page">{">"}</button>
        </div>
    )
}
