import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Person = {
    email: string;
    password: string;
    role: string;
};

export const Login=()=> {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Person>({
        email: "",
        password: "",
        role: "",
    });
    const [error, setError] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password || !formData.role) {
            setError("Miss field")
        return;
        }

        if (formData.email === "anspiderman@gmail.com" && formData.password === "12345678") {
            setError("");
            if (formData.role === "admin") {
                navigate("/account");
            } else {
                navigate("/user");
            }
        } else {
            setError("Email or pass error");
        }
    };

    return (
        <div style={{ padding: 30 }}>
            <form className="container-form" onSubmit={handleSubmit}>
                <h2>Đăng nhập</h2>

                <input type="email" name="email" placeholder="Nhập email" value={formData.email} onChange={handleChange} required/>

                <input type="password" name="password" placeholder="Nhập mật khẩu" value={formData.password} onChange={handleChange} required/>

                <select name="role" value={formData.role} onChange={handleChange} required>
                    <option value="">-- Chọn quyền --</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    )
}