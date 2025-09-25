import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Task } from "..//types/task";
import axiosConfig from "../utils/axiosConfig";

export const getAllTasks = createAsyncThunk("task/getAllTasks", async () => {
    const response = await axiosConfig.get("tasks");
    return response.data;
});

export const createTask = createAsyncThunk(
    "task/createTask",
    async (task: Omit<Task, "id">) => {
        const response = await axiosConfig.post("tasks", task);
        return response.data;
    }
);

export const updateTask = createAsyncThunk(
    "task/updateTask",
    async (task: Task) => {
        const { id, ...updateData } = task;
        const response = await axiosConfig.put(`tasks/${id}`, updateData);
        return response.data;
    }
);

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    async (id: number) => {
        await axiosConfig.delete(`tasks/${id}`);
        return id;
    }
);

export const toggleTaskCompletion = createAsyncThunk(
    "task/toggleTaskCompletion",
    async (task: Task) => {
        const response = await axiosConfig.put(`tasks/${task.id}`, {
            ...task,
            completed: !task.completed,
        });
        return response.data;
    }
);