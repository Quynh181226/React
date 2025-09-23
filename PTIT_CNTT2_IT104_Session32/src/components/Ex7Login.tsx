import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store/Store.ts";
import { useNavigate } from "react-router-dom";

export const Ex7Login = () => {
    const { account } = useSelector((state: RootType) => state);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        email: account.account.email,
        password: account.account.password,
    });

    const handleSubmit = () => {
        dispatch({ type: "LOGIN", payload: value });
        alert("Đăng nhập thành công");
        nav("/");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f2f5" }}>
            <div style={{ background: "#fff", padding: "30px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", width: "300px" }}>
                <h2 style={{ textAlign: "center" }}>Login</h2>
                <input type="text" placeholder="Email" style={{ width: "92%", padding: "10px", margin: "8px 0", border: "1px solid #ccc", borderRadius: "5px" }} value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })}/>
                <input type="password" placeholder="Password" style={{ width: "92%", padding: "10px", margin: "8px 0", border: "1px solid #ccc", borderRadius: "5px" }} value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })}/>
                <button onClick={handleSubmit} style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>
                    Login
                </button>
            </div>
        </div>
    );
};
