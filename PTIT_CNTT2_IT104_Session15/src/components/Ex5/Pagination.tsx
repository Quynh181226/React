export const Pagination = () => {
    return (
        <div style={{ display: "flex", justifyContent: "right", gap: "1%", marginTop: "20px" }}>
            <button
                style={{
                    padding: "6px 12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                }}
            >
                Prev
            </button>
            <button
                style={{
                    padding: "6px 12px",
                    border: "1px solid #007bff",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                1
            </button>

            <button
                style={{
                    padding: "6px 12px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                2
            </button>

            <button
                style={{
                    padding: "6px 12px",
                    border: "1px solid #ccc",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                3
            </button>
            <button
                style={{
                    padding: "6px 12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                }}
            >
                Next
            </button>
        </div>
    )
}