import React, { useState } from 'react';
import './TsBasicsSection.css';
import CodeBlock from '../shared/code-block/CodeBlock';
import type { User, Admin } from '../../types/interfaces';
import type { Status, Product } from '../../types/types';
import { Animal, Dog } from '../../types/classes';

type TabId = 'primitives' | 'interfaces' | 'types' | 'classes';

interface Tab {
  id: TabId;
  label: string;
}

const TsBasicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('primitives');

  // Primitive Types Examples
  const stringExample: string = "Hello TypeScript!";
  const numberExample: number = 42;
  const booleanExample: boolean = true;
  const arrayExample: number[] = [1, 2, 3, 4, 5];
  const objectExample: object = { key: 'value' };
  const anyExample: any = "This can be anything";

  // Interface Examples
  const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    isActive: true
  };

  const admin: Admin = {
    id: 2,
    name: "Admin User",
    isActive: true,
    permissions: ["read", "write", "delete"]
  };

  // Type Examples
  const currentStatus: Status = 'approved';
  const product: Product = {
    id: 1,
    name: "TypeScript Guide",
    price: 29.99
  };

  // Class Examples
  const dog = new Dog("Buddy", 3, "Golden Retriever");
  const animal = new Animal("Generic Animal", 5);

  const tabs: Tab[] = [
    { id: 'primitives', label: 'Primitive Types' },
    { id: 'interfaces', label: 'Interfaces' },
    { id: 'types', label: 'Type Aliases' },
    { id: 'classes', label: 'Classes & OOP' }
  ];

  return (
    <section id="ts-basics" className="ts-basics-section">
      <div className="ts-basics-container">
        <div className="ts-basics-header">
          <h2>TypeScript Types & Concepts</h2>
          <p>Explore TypeScript's powerful type system and object-oriented programming features</p>
        </div>

        <div className="ts-basics-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="ts-basics-content">

          {activeTab === 'primitives' && (
            <div className="tab-content">
              <h3>Primitive Data Types</h3>
              <div className="examples-grid">
                <div className="example-card">
                  <h4>String</h4>
                  <CodeBlock>
                    <code>const message: string = "{stringExample}";</code>
                  </CodeBlock>
                  <p>Used for text data. Can be enclosed in single quotes, double quotes, or backticks for template literals.</p>
                </div>

                <div className="example-card">
                  <h4>Number</h4>
                  <CodeBlock>
                    <code>const count: number = {numberExample};</code>
                  </CodeBlock>
                  <p>All numeric values in TypeScript are floating point numbers, including integers and decimals.</p>
                </div>

                <div className="example-card">
                  <h4>Boolean</h4>
                  <CodeBlock>
                    <code>const isValid: boolean = {booleanExample.toString()};</code>
                  </CodeBlock>
                  <p>Simple true/false values for logical operations and conditions.</p>
                </div>

                <div className="example-card">
                  <h4>Array</h4>
                  <CodeBlock>
                    <code>const numbers: number[] = [{arrayExample.join(', ')}];</code>
                  </CodeBlock>
                  <p>Collections of elements. Can also be written as Array&lt;number&gt;.</p>
                </div>

                <div className="example-card">
                  <h4>Object</h4>
                  <CodeBlock>
                    <code>const obj: object = {JSON.stringify(objectExample)};</code>
                  </CodeBlock>
                  <p>Non-primitive type representing anything that isn't a primitive value.</p>
                </div>

                <div className="example-card">
                  <h4>Any</h4>
                  <CodeBlock>
                    <code>const value: any = "{anyExample}";</code>
                  </CodeBlock>
                  <p>Disables type checking. Use sparingly as it defeats the purpose of TypeScript.</p>
                </div>

                <div className="example-card">
                  <h4>Null & Undefined</h4>
                  <CodeBlock>
                    <code>const empty: null = null;<br />const notSet: undefined = undefined;</code>
                  </CodeBlock>
                  <p>Represent absence of value. Null is intentionally empty, undefined means not yet assigned.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'interfaces' && (
            <div className="tab-content">
              <h3>Interfaces</h3>
              <p>Interfaces define the structure of objects and can be extended to create new interfaces.</p>

              <div className="example-card large">
                <h4>Basic Interface</h4>
                <CodeBlock>
                  <pre>{`// src/types/interfaces.ts
export interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  isActive: boolean;
}

// Usage
import type { User } from './types/interfaces';
const user: User = { ... };`}</pre>
                </CodeBlock>
                <div className="result">
                  <strong>Example instance:</strong>
                  <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
              </div>

              <div className="example-card large">
                <h4>Interface Extension</h4>
                <CodeBlock>
                  <pre>{`// src/types/interfaces.ts
export interface Admin extends User {
  permissions: string[];
}

// Usage
import type { Admin } from './types/interfaces';
const admin: Admin = { ... };`}</pre>
                </CodeBlock>
                <div className="result">
                  <strong>Example instance:</strong>
                  <pre>{JSON.stringify(admin, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'types' && (
            <div className="tab-content">
              <h3>Type Aliases</h3>
              <p>Create custom types using union types, intersection types, and type aliases.</p>

              <div className="example-card large">
                <h4>Union Types</h4>
                <CodeBlock>
                  <pre>{`// src/types/typeAliases.ts
export type Status = 'pending' | 'approved' | 'rejected';

// Usage
import type { Status } from './types/typeAliases';
const currentStatus: Status = '${currentStatus}';`}</pre>
                </CodeBlock>
                <p>Union types allow a value to be one of several types.</p>
              </div>

              <div className="example-card large">
                <h4>Object Type Alias</h4>
                <CodeBlock>
                  <pre>{`// src/types/typeAliases.ts
export type Product = {
  id: number;
  name: string;
  price: number;
};

// Usage
import type { Product } from './types/typeAliases';
const product: Product = { ... };`}</pre>
                </CodeBlock>
                <div className="result">
                  <strong>Example instance:</strong>
                  <pre>{JSON.stringify(product, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'classes' && (
            <div className="tab-content">
              <h3>Classes & Object-Oriented Programming</h3>
              <p>TypeScript supports full object-oriented programming with classes, inheritance, and access modifiers.</p>

              <div className="example-card large">
                <h4>Base Class</h4>
                <CodeBlock>
                  <pre>{`// src/types/classes.ts
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
}`}</pre>
                </CodeBlock>
              </div>

              <div className="example-card large">
                <h4>Inheritance</h4>
                <CodeBlock>
                  <pre>{`// src/types/classes.ts
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
const dog = new Dog("Buddy", 3, "Golden Retriever");`}</pre>
                </CodeBlock>
                <div className="result">
                  <strong>Examples:</strong>
                  <p>{animal.speak()} (Age: {animal.getAge()})</p>
                  <p>{dog.speak()} (Age: {dog.getAge()}, Breed: {dog.getBreed()})</p>
                </div>
              </div>

              <div className="oop-concepts">
                <h4>Organized Code Structure</h4>
                <CodeBlock>
                  <pre>{`// src/types/
├── index.ts          // Re-exports all types
├── interfaces.ts     // Interface definitions  
├── typeAliases.ts   // Type aliases
└── classes.ts       // Class definitions

// Import examples:
import type { User, Admin } from './types/interfaces';
import type { Status, Product } from './types/typeAliases';
import { Animal, Dog } from './types/classes';`}</pre>
                </CodeBlock>

                <h4>Key OOP Concepts</h4>
                <ul>
                  <li><strong>Encapsulation:</strong> Private and protected members control access</li>
                  <li><strong>Inheritance:</strong> Classes can extend other classes using 'extends'</li>
                  <li><strong>Polymorphism:</strong> Method overriding allows different implementations</li>
                  <li><strong>Abstraction:</strong> Abstract classes and interfaces define contracts</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TsBasicsSection;