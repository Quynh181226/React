import { useEffect, useState } from "react";
import { users } from "./Users"
import { useNavigate, useParams } from "react-router-dom";
type UserType = {
    id: number
    username: string
    email: string
    address: string
}
export const UserDetails = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState<UserType | null>(null)
    useEffect(() => {
        const userFound = users.find((u) => u.id === Number(params.id))
        if (userFound) {
            setUser(userFound)
        } else {
            navigate("/not-found")
        }
    }, [params.id])
    if (!user) {
        return null
    }
    return (
        <div>
            <div style={{padding: "5px", display: "flex", flexDirection: "column", gap: "10px", width: "10%", border: "1px solid gray",}}>
                <span>id: {user.id}</span>
                <span>name: {user.username}</span>
                <span>email: {user.email}</span>
                <span>address: {user.address}</span>
                <button onClick={() => navigate(-1)}>quay lai</button>
            </div>
        </div>
    )
}