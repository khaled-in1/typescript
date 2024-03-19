// function Controller(endPoint: string) {
//   return (constructor: Function) => {
//     console.log("Controller decorator called");

//     constructor.prototype.endPoint = endPoint;
//     constructor.prototype.login = () => {
//       console.log("You logged in successfully");
//     };
//   };
// }

// function Guard(role: string) {
//   return (constructor: Function) => {
//     console.log("Guard decorator called");
//     constructor.prototype.role = role;
//   };
// }

// @Guard("Manager") // logged second
// @Controller("/api/auth") // logged first
// class Auth {}
