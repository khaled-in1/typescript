interface IPerson {
  name: string;
  age: number;
  greet(text: string): void;
}

type TPerson = {
  name: string;
  age: number;
  greet(text: string): void;
};
