// User interface demonstrating basic interface structure
export interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  isActive: boolean;
}

// Admin interface demonstrating interface extension
export interface Admin extends User {
  permissions: string[];
}
