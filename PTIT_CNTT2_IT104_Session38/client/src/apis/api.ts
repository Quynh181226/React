import axiosConfig from "../utils/axiosConfig.ts";
import {createAsyncThunk} from"@reduxjs/toolkit"
import type { Book } from "../types/type";

export const getAllBooks=createAsyncThunk("book/getAllBooks", async () => {
    const res = await axiosConfig.get(`books`)
    return res.data;
})

export const addBook = createAsyncThunk("book/addBook", async (newBook: Book) => {
    const res=await axiosConfig.post(`books`, newBook)
    return res.data;
})

export const deleteBook = createAsyncThunk("book/deleteBook", async (id: string) => {
    await axiosConfig.delete(`books/${id}`)
    return id;
})

export const updateBook = createAsyncThunk("book/updateBook", async (book: Book) => {
    const res=await axiosConfig.put(`books/${book.id}`, book)
    return res.data;
})

