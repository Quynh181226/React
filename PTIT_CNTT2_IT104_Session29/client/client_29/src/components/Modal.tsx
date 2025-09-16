import React from "react";
import type { StudentType } from "./Ex4";
import { Modal } from "antd";

type AddStudentModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  newStudent: StudentType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showModal: () => void;
};
export const ModalAdd = ({
  isModalOpen,
  handleOk,
  handleCancel,
  newStudent,
  handleInputChange,
  showModal,
}: AddStudentModalProps) => {
  return (
    <div>
      <button
        onClick={showModal}
        style={{
          background: "green",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}>
        + Thêm mới sinh viên
      </button>
      <Modal
        title="Them moi sinh vien"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "50%",
          }}>
          <label htmlFor="">Ten</label>{" "}
          <input
            type="text"
            value={newStudent.student_name}
            name="student_name"
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <label htmlFor="">Email</label>{" "}
          <input
            type="text"
            value={newStudent.email}
            name="email"
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <label htmlFor="">Dia chi</label>{" "}
          <input
            type="text"
            value={newStudent.address}
            name="address"
            onChange={(e) => handleInputChange(e)}
          />{" "}
          <label htmlFor="">Dien thoai</label>{" "}
          <input
            type="text"
            value={newStudent.phone}
            name="phone"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </Modal>
    </div>
  );
};
