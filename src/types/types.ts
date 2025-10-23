// Union type
export type Status = "pending" | "approved" | "rejected";

// Object type
export type Product = {
  id: number;
  name: string;
  price: number;
};

// Function type
export type EventHandler = (event: string) => void;

// Generic type
export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
};
