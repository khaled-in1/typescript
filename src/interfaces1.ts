interface UserInterface {
  name: string;
  age?: number;
  getName(): string;
}

const user: UserInterface = {
  name: "khaled",
  age: 36,
  getName() {
    return `Hello ${this.name}`;
  },
};
const user2: UserInterface = {
  name: "Zaki",
  getName() {
    return `Hello ${this.name}`;
  },
};

console.log(user.getName());
// interface DepInterface {
//   id: string;
//   name: string;
// }
// class Departm implements DepInterface {
//   id: string;
//   name: string;
//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }

// const financeDepart = new Departm("Dep1", "finance");
// console.log(financeDepart.name);
