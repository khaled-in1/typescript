// function ToUpperCase(
//   classPrototype: object,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalValue = descriptor.get;
//   descriptor.get = function () {
//     return originalValue?.call(this).toUpperCase();
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   @ToUpperCase
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person = new Person("khaled", "nabi");
// console.log(person.fullName);

// const person2 = new Person("lyes", "chelfi");
// console.log(person2.fullName);
