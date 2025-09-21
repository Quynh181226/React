import type { RootType } from "../store/Store.ts";
import { useSelector } from "react-redux";
export const Ex2ListUser = () => {
    const { List } = useSelector((state: RootType) => state);
    return (
        <div>
            <table
                border={1}
                cellPadding={"10px"}
                style={{ borderCollapse: "collapse", padding: "10px" }}>
                <thead>
                <tr style={{ padding: "10px" }}>
                    <th style={{ padding: "10px" }}>Id</th>
                    <th style={{ padding: "10px" }}>Tên</th>
                    <th style={{ padding: "10px" }}>Giới tính</th>
                    <th style={{ padding: "10px" }}>Ngày sinh</th>
                    <th style={{ padding: "10px" }}>Địa chỉ</th>
                    <th style={{ padding: "10px" }}>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {List.map((p) => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.fullName}</td>
                        <td>{p.gender}</td>
                        <td>{p.birthDate}</td>
                        <td>{p.address}</td>
                        <td>
                            <button>Sửa</button>
                            <button style={{ marginLeft: "8px" }}>Xóa</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};