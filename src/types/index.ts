export * from "./interfaces";
export * from "./types";
export * from "./classes";

// Additional utility types for demonstration
export type Maybe<T> = T | null | undefined;

// Enum-like object using const assertion
export const UserRole = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
  GUEST: "guest",
} as const;

export type UserRoleType = (typeof UserRole)[keyof typeof UserRole];

// Literal types
export type Theme = "light" | "dark";
export type Size = "small" | "medium" | "large";
