export const Register = () => {
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f9f9f9",}}>
                <form style={{backgroundColor: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", width: "350px", display: "flex", flexDirection: "column",}}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
                        Register account
                    </h2>
                    <label style={{ fontSize: "14px", marginBottom: "6px", color: "#333" }}>
                        Your email
                    </label>
                    <input type="email" placeholder="name@company.com" style={{padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "15px", fontSize: "14px",}} required/>

                    <label style={{ fontSize: "14px", marginBottom: "6px", color: "#333" }}>
                        Password
                    </label>
                    <input type="password" placeholder="••••••••" style={{padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "20px", fontSize: "14px",}} required/>
                    <label style={{ fontSize: "14px", marginBottom: "6px", color: "#333" }}>
                        Confirm password
                    </label>
                    <input type="password" placeholder="••••••••" style={{padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "20px", fontSize: "14px",}} required/>

                    <button type="submit" style={{backgroundColor: "#2563eb", color: "white", padding: "10px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "15px", fontWeight: "500", transition: "background-color 0.2s ease",}}
                        onMouseOver={(e) =>
                            ((e.target as HTMLButtonElement).style.backgroundColor = "#1e40af")
                        }
                        onMouseOut={(e) =>
                            ((e.target as HTMLButtonElement).style.backgroundColor = "#2563eb")
                        }
                    >
                        Create an account
                    </button>

                    <p style={{textAlign: "center", marginTop: "15px", fontSize: "14px", color: "#555",}}>
                        Already have an account?{" "}
                        <span style={{color: "#2563eb", cursor: "pointer", fontWeight: "500",}} onClick={() => alert("Redirect to register page")}>
                        Login here
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}