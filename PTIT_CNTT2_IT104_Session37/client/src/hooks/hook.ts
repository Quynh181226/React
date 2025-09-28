import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../stores/store.ts";

// Custom hook lấy dispatch với kiểu AppDispatch đã định nghĩa
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook lấy state với kiểu RootState đã định nghĩa
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
