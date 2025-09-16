import type { StudentType } from "./Ex4";
type Props = {
  student: StudentType;
  deleteStudent : (id:number) =>void
};

export const StudentRow = ({ student, deleteStudent }: Props) => {
  return (
    <tr key={student.id}>
      <td style={{ textAlign: "center", padding: "10px" }}>
        <input type="checkbox" />
      </td>
      <td style={{ padding: "10px" }}>{student.student_name}</td>
      <td style={{ padding: "10px" }}>{student.email}</td>
      <td style={{ padding: "10px" }}>{student.address}</td>
      <td style={{ padding: "10px" }}>{student.phone}</td>
      <td style={{ textAlign: "center", padding: "10px" }}>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginRight: "8px",
            color: "orange",
          }}
        >
          ✏️
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "red",
          }}
          onClick={()=>deleteStudent(student.id)}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
};
