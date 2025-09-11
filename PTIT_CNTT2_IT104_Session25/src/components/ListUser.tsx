import { users } from "./Users"
import { useNavigate } from "react-router-dom";
export const ListUser = () => {
    const navigate = useNavigate()
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {users.map((u) => (
                <div
                    key={u.id}
                    style={{padding: "5px", display: "flex", flexDirection: "column", gap: "10px", width: "10%", border: "1px solid gray",}}>
                    <span>id: {u.id}</span>
                    <span>name: {u.username}</span>
                    <span>email: {u.email}</span>
                    <span>address: {u.address}</span>
                    <button onClick={() => navigate(`/user-details/${u.id}`)}>
                        Xem chi tiet
                    </button>
                </div>
            ))}
        </div>
    )
}