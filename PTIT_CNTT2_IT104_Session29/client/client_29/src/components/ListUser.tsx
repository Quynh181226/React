import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
type UserType = {
  id: number;
  name: string;
  gender: string;
};
export const ListUser = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchUser, setSearchUser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        const allUsers: UserType[] = res.data;
        const filtered = searchUser.trim()
          ? allUsers.filter(
              (u) => u.name.toLowerCase().includes(searchUser.toLowerCase()) 
            )
          : allUsers;

        setUsers(filtered);
      })
      .catch((err) => console.log(err));
  }, [searchUser]);
  
  return (
    <div>
      <h2>Danh sach nguoi dung</h2>
      <input
        type="text"
        placeholder="tim kiem user"
        value={searchUser}
        onChange={(e) => {
          setSearchUser(e.target.value);
        }}
      />
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Gioi tinh</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u.id}>
              <td>{index + 1}</td>
              <td>{u.name}</td>
              <td>{u.gender}</td>
              <td>
                <button>Sua</button>
                <button>Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
