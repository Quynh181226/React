import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../utils/axiosConfig";
import type { Student } from "../types/type";

export const getAllStudents = createAsyncThunk("student/getAllStudents", async () => {
        const res = await axiosConfig.get('students');
        return res.data;
    }
);

export const addStudent = createAsyncThunk("student/addStudent", async (newStudent: Student) => {
        const res = await axiosConfig.post('students', newStudent);
        return res.data;
    }
);

export const deleteStudent = createAsyncThunk("student/deleteStudent", async (id: string) => {
        await axiosConfig.delete(`students/${id}`);
        return id;
    }
);

export const updateStudent = createAsyncThunk("student/updateStudent", async (stu: Student) => {
        const res = await axiosConfig.put(`students/${stu.id}`, stu);
        return res.data;
    }
);