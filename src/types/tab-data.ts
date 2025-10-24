// Shared types for tabs data structure
export interface CodeExample {
  title: string;
  code: string;
  description: string;
  sizeClass: "regular" | "large";
  result?: {
    title: string;
    content: string;
    type: "json" | "text";
  };
}

export interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  examples: CodeExample[];
  concepts?: {
    title: string;
    items: string[];
  };
}
