import axios from "axios";
import React, { useEffect, useState } from "react";
import { StudentRow } from "./StudentRow";
import { TableHead } from "./TableHead";
import { ModalAdd } from "./Modal";
export type StudentType = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
};

export const Ex4 = () => {
  const [searchValue, setSearchValue] = useState("");
  const [students, setStudents] = useState<StudentType[]>([]);
  const [newStudent, setNewStudent] = useState<StudentType>({
    id: Math.ceil(Math.random() * 1000),
    student_name: "",
    email: "",
    address: "",
    phone: "",
    status: true,
    created_at: String(new Date().toLocaleDateString()),
  });
  const getAllStudents = () => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };
  const getStudentById = async () => {
    try {
      const foundStudent = await axios.get(
        `http://localhost:8080/students?id=${searchValue}`
      );
      if (foundStudent.data.length === 0) {
        console.log("khong tim thay sinh vien");
      } else {
        console.log(foundStudent.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value,
    });
  };
  const createStudent = () => {
    axios.post("http://localhost:8080/students", newStudent).then(() => {
      alert(`them thanh cong`);
      getAllStudents();
    });
  };
  const deleteStudent = (id: number) => {
    axios
      .delete(`http://localhost:8080/students/${id}`)
      .then(() => {
        alert(`Xoa thanh cong`);
        getAllStudents();
      })
      .catch((err) => console.log(err));
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    createStudent();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <div>
      <div style={{ margin: "30px" }}>
        <input
          type="text"
          placeholder="nhap ten sinh vien muon tim"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={getStudentById}>Tim</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            background: "#3b5b7f",
            padding: "10px 15px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}>
          <h2 style={{ margin: 0 }}>
            Quản lý <span style={{ fontWeight: "bold" }}>sinh viên</span>
          </h2>
          <ModalAdd
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            newStudent={newStudent}
            handleInputChange={handleInputChange}
            showModal={showModal}
          />
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "0",
            textAlign: "center",
          }}>
          <TableHead />
          <tbody>
            {students.map((s) => (
              <StudentRow
                key={s.id}
                student={s}
                deleteStudent={deleteStudent}
              />
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
          }}>
          <div>Hien thi 5/10 ban ghi</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "20px",
              fontFamily: "Arial, sans-serif",
            }}>
            <span style={{ color: "#999", cursor: "pointer" }}>Trước</span>
            <span style={{ color: "#333", cursor: "pointer" }}>1</span>
            <span style={{ color: "#333", cursor: "pointer" }}>2</span>
            <span
              style={{
                background: "#00aaff",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: "4px",
              }}>
              3
            </span>
            <span style={{ color: "#333", cursor: "pointer" }}>4</span>
            <span style={{ color: "#333", cursor: "pointer" }}>5</span>
            <span style={{ color: "#999", cursor: "pointer" }}>Sau</span>
          </div>
        </div>
      </div>
    </div>
  );
};
