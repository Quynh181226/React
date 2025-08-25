
import {type CSSProperties, useState} from "react";
import { StudentInteraction } from "./StudentInteraction";
import { TableRow } from "./TableRow";
import "./css5.css";
import { Filter_Search } from "./Filter_Search";
import { Pagination } from "./Pagination";

export const Main5 = () => {
    const containerStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "",
        border: "1px solid rgb(232, 230, 230)",
        padding: "1.5%",
    }
    const [students] = useState([
        {id: "SV001", name: "Nguyen Van A", dob: "21/12/2000", email: "nva@gmail.com", status: "active"},
        {id: "SV002", name: "Nguyen Thi B", dob: "5/2/2000", email: "ntb@gmail.com", status: "inactive"},
    ])
    return (
        <div style={containerStyle}>
            <StudentInteraction />
            <Filter_Search />
            <table >
                <tr className="tableHead">
                    <td>STT</td>
                    <td>Ma Sinh vien</td>
                    <td>Ten sinh vien</td>
                    <td>Ngay sinh</td>
                    <td>Email</td>
                    <td>Trang thai</td>
                    <td>Chuc nang</td>
                </tr>
                {students.map((s, index) => (
                    <TableRow count={index + 1} {...s} />
                ))}
            </table>
            <Pagination/>
        </div>
    )
};
