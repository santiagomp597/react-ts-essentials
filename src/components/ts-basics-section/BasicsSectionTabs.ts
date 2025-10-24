import { TabData } from "../../types/tab-data";

// Tab data for TypeScript Basics Section
export const tsBasicsTabs: TabData[] = [
  {
    id: "primitives",
    label: "Primitive Types",
    title: "Primitive Data Types",
    description:
      "TypeScript supports all JavaScript primitive types with optional type annotations for better type safety.",
    examples: [
      {
        title: "String",
        code: 'const message: string = "Hello TypeScript!";',
        description:
          "Used for text data. Can be enclosed in single quotes, double quotes, or backticks for template literals.",
        sizeClass: "regular",
      },
      {
        title: "Number",
        code: "const count: number = 42;",
        description:
          "All numeric values in TypeScript are floating point numbers, including integers and decimals.",
        sizeClass: "regular",
      },
      {
        title: "Boolean",
        code: "const isValid: boolean = true;",
        description:
          "Simple true/false values for logical operations and conditions.",
        sizeClass: "regular",
      },
      {
        title: "Array",
        code: "const numbers: number[] = [1, 2, 3, 4, 5];",
        description:
          "Collections of elements. Can also be written as Array<number>.",
        sizeClass: "regular",
      },
      {
        title: "Object",
        code: 'const obj: object = { key: "value" };',
        description:
          "Non-primitive type representing anything that isn't a primitive value.",
        sizeClass: "regular",
      },
      {
        title: "Any",
        code: 'const value: any = "This can be anything";',
        description:
          "Disables type checking. Use sparingly as it defeats the purpose of TypeScript.",
        sizeClass: "regular",
      },
      {
        title: "Null & Undefined",
        code: "const empty: null = null;\nconst notSet: undefined = undefined;",
        description:
          "Represent absence of value. Null is intentionally empty, undefined means not yet assigned.",
        sizeClass: "regular",
      },
    ],
  },
  {
    id: "interfaces",
    label: "Interfaces",
    title: "Interfaces",
    description:
      "Interfaces define the structure of objects and can be extended to create new interfaces.",
    examples: [
      {
        title: "Basic Interface",
        code: `export interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  isActive: boolean;
}

// Usage
import type { User } from './types/interfaces';
const user: User = { ... };`,
        description:
          "Define the shape of objects with required and optional properties.",
        sizeClass: "large",
        result: {
          title: "Example instance:",
          content: `{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "isActive": true
}`,
          type: "json",
        },
      },
      {
        title: "Interface Extension",
        code: `// src/types/interfaces.ts
export interface Admin extends User {
  permissions: string[];
}

// Usage
import type { Admin } from './types/interfaces';
const admin: Admin = { ... };`,
        description:
          "Extend existing interfaces to create more specific types.",
        sizeClass: "large",
        result: {
          title: "Example instance:",
          content: `{
  "id": 2,
  "name": "Admin User",
  "isActive": true,
  "permissions": ["read", "write"]
}`,
          type: "json",
        },
      },
    ],
  },
  {
    id: "types",
    label: "Type Aliases",
    title: "Type Aliases",
    description:
      "Create custom types using union types, intersection types, and type aliases.",
    examples: [
      {
        title: "Union Types",
        code: `// src/types/typeAliases.ts
export type Status = 'pending' | 'approved' | 'rejected';

// Usage
import type { Status } from './types/typeAliases';
const currentStatus: Status = 'approved';`,
        description: "Union types allow a value to be one of several types.",
        sizeClass: "large",
      },
      {
        title: "Object Type Alias",
        code: `// src/types/typeAliases.ts
export type Product = {
  id: number;
  name: string;
  price: number;
};

// Usage
import type { Product } from './types/typeAliases';
const product: Product = { ... };`,
        description: "Define reusable object type structures.",
        sizeClass: "large",
        result: {
          title: "Example instance:",
          content: `{
  "id": 1,
  "name": "TypeScript Guide",
  "price": 29.99
}`,
          type: "json",
        },
      },
    ],
  },
  {
    id: "classes",
    label: "Classes & OOP",
    title: "Classes & Object-Oriented Programming",
    description:
      "TypeScript supports full object-oriented programming with classes, inheritance, and access modifiers.",
    examples: [
      {
        title: "Base Class",
        code: `// src/types/classes.ts
export class Animal {
  protected name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public speak(): string {
    return \`\${this.name} makes a sound\`;
  }

  public getAge(): number {
    return this.age;
  }
}`,
        description:
          "Define classes with properties, constructors, and methods.",
        sizeClass: "large",
      },
      {
        title: "Inheritance",
        code: `// src/types/classes.ts
export class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  public speak(): string {
    return \`\${this.name} barks!\`;
  }

  public getBreed(): string {
    return this.breed;
  }
}

// Usage
import { Animal, Dog } from './types/classes';
const dog = new Dog("Buddy", 3, "Golden Retriever");`,
        description:
          "Extend classes to create specialized versions with additional functionality.",
        sizeClass: "large",
        result: {
          title: "Examples:",
          content:
            "Generic Animal makes a sound (Age: 5)\nBuddy barks! (Age: 3, Breed: Golden Retriever)",
          type: "text",
        },
      },
      {
        title: "Organized Code Structure",
        code: `// src/types/
├── index.ts          // Re-exports all types
├── interfaces.ts     // Interface definitions  
├── typeAliases.ts   // Type aliases
└── classes.ts       // Class definitions

// Import examples:
import type { User, Admin } from './types/interfaces';
import type { Status, Product } from './types/typeAliases';
import { Animal, Dog } from './types/classes';`,
        description:
          "Organize TypeScript types in a structured folder hierarchy for better maintainability.",
        sizeClass: "large",
      },
    ],
    concepts: {
      title: "Key OOP Concepts",
      items: [
        "Encapsulation: Private and protected members control access",
        "Inheritance: Classes can extend other classes using 'extends'",
        "Polymorphism: Method overriding allows different implementations",
        "Abstraction: Abstract classes and interfaces define contracts",
      ],
    },
  },
];
