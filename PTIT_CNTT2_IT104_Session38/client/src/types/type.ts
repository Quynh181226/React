export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
}

export interface InitialState {
  list: Book[];
  status: "idle" | "pending" | "success" | "failed";
  error: unknown;
}