// const addID = <T extends object>(obj: T) => {
//   const id = Math.random().toString();
//   return {
//     ...obj,
//     id,
//   };
// };

// interface IUser<T, V> {
//   name: string;
//   data: T;
//   meta: V;
// }

// const user1: IUser<{ meta: string }, string[]> = {
//   name: "khaled",
//   data: {
//     meta: "amine",
//   },
//   meta: ["ahmed"],
// };

// const user3: IUser<string, number> = {
//   name: "zaki",
//   data: "adel",
//   meta: 36,
// };

// console.log(addID(user3));
