import { StudentSearch } from "./StudentSearch";
import { StudentList, Student } from "./StudentList";
import { StudentInfo } from "./StudentInfo";
import "../style/Ex10.scss";

const students: Student[] = [
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
];

export const Ex10 = () => {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            <div className="left">
                <StudentSearch />
                <StudentList students={students} />
            </div>
            <div className="right">
                <StudentInfo />
            </div>
        </div>
    );
};
