// Base class
export class Animal {
  protected name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public speak(): string {
    return `${this.name} makes a sound`;
  }

  public getAge(): number {
    return this.age;
  }
}

// Derived class
export class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  public speak(): string {
    return `${this.name} barks!`;
  }

  public getBreed(): string {
    return this.breed;
  }
}

// Abstract class
export abstract class Vehicle {
  protected brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  abstract startEngine(): string;

  public getBrand(): string {
    return this.brand;
  }
}

// Implementation of abstract class
export class Car extends Vehicle {
  private model: string;

  constructor(brand: string, model: string) {
    super(brand);
    this.model = model;
  }

  public startEngine(): string {
    return `${this.brand} ${this.model} engine started!`;
  }

  public getModel(): string {
    return this.model;
  }
}
