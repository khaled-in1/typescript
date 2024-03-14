// function Controller(endPoint: string) {
//   return (constructor: Function) => {
//     constructor.prototype.endPoint = endPoint;
//     constructor.prototype.login = () => {
//       console.log("You logged in successfully");
//     };
//   };
// }

// @Controller("/api/auth")
// class Auth {}

// @Controller("/api/books")
// class Book {}

// const auth = new Auth();
// //@ts-ignore
// console.log(auth.endPoint);

// const book = new Book();

// //@ts-ignore
// console.log(book.endPoint);
