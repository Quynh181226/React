import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getAllStudents, addStudent, deleteStudent, updateStudent } from "../apis/api";
import type { initialState, Student } from "../types/type";

const initialState: initialState = {
    list: [],
    status: "idle",
    error: null,
    // studentUpdate: null,
};

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {},
    // reducers: {
    //     getStuUpdate: (state, action: PayloadAction<Student>) => {
    //         state.studentUpdate = action.payload;
    //     },
    //     resetStuUpdate: (state) => {
    //         state.studentUpdate = null;
    //     },
    // },
    extraReducers(builder) {
        builder
            .addCase(getAllStudents.pending, (state) => {
                state.status = "pending";
            })
            .addCase(getAllStudents.fulfilled, (state, action: PayloadAction<Student[]>) => {
                state.status = "success";
                state.list = action.payload;
            })
            .addCase(getAllStudents.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Lỗi khi lấy danh sách học sinh";
            })
            .addCase(addStudent.fulfilled, (state, action: PayloadAction<Student>) => {
                state.list.push(action.payload);
            })
            .addCase(deleteStudent.fulfilled, (state, action: PayloadAction<string>) => {
                state.list = state.list.filter((s) => s.id !== action.payload);
            })
            .addCase(updateStudent.fulfilled, (state, action: PayloadAction<Student>) => {
                state.list = state.list.map((s) => (s.id === action.payload.id ? action.payload : s));
            });
    },
});

export const stuSlice = studentSlice.reducer;
// export const { getStuUpdate, resetStuUpdate } = studentSlice.actions;