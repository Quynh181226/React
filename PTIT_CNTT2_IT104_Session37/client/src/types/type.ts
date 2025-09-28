export interface Student {
  id: string;
  name: string;
  age: number;
  grade: string;
}

export interface initialState {
  list: Student[];
  status: "idle" | "pending" | "success" | "failed";
  error: any;

  // studentUpdate: Student | null;
}