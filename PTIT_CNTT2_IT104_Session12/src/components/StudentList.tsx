export interface Student {
    id: string;
    name: string;
    age: number;
    gender: string;
    dob?: string;
    birthplace?: string;
    address?: string;
}

interface Props {
    students: Student[];
}

export const StudentList: React.FC<Props> = ({ students }) => {
    return (
        <div className="list-student">
            <div className="title-list">Danh sách sinh viên</div>
            <div className="table-info">
                <table>
                    <thead>
                    <tr>
                        <th style={{ width: 60 }}>#</th>
                        <th style={{ minWidth: 120 }}>Mã sinh viên</th>
                        <th style={{ minWidth: 180 }}>Tên sinh viên</th>
                        <th style={{ width: 80 }}>Tuổi</th>
                        <th style={{ width: 90 }}>Giới tính</th>
                        <th style={{ minWidth: 180 }}>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((s, index) => (
                        <tr key={s.id}>
                            <td>{index + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.gender}</td>
                            <td>
                                <button style={{ backgroundColor: "#F95F53" }}>Xem</button>
                                <button style={{ backgroundColor: "#FFAF20" }}>Sửa</button>
                                <button style={{ backgroundColor: "#34B1AA" }}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
