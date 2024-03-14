const person = {
  name: "khaled",
  age: 36,
  greet(text) {
    return text + " " + this.name;
  },
};

const person2 = {
  name: "amine",
  age: 40,
  greet(text) {
    return text + " " + this.name;
  },
};

function personInfo(what, what2) {
  console.log(
    `Hello ${this.name} your age is ${this.age} this time to change ${what} and ${what2}`
  );
}

// const info = personInfo.apply(person2, ["your clothes", " your job "]);
// const info = personInfo.call(person2, "your clothes", " your job ");
const info = personInfo.bind(person2, "your clothes", " your job ");
personInfo.bind(person, "bla bla", "bla bla");
console.log(info());
// console.log(personInfo("your clothes", " your job "));
