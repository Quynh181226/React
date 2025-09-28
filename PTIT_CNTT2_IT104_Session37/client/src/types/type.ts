export interface Student {
  id: string;
  name: string;
  age: number;
  grade: string; // ex: "10A1"
}

export interface initialState {
  list: Student[];
  status: "idle" | "pending" | "success" | "failed";
  error: any;
  // Lưu thông tin sinh viên đang chọn để cập nhật hoặc null nếu không có ai chọn
  // studentUpdate: Student | ;
}