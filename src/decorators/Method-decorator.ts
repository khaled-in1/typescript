// function Logger(
//   classPrototype: object,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalValue = descriptor.value;
//   descriptor.value = function (speed: number) {
//     console.log("Before Logger Decorator");
//     originalValue.call(this, speed);
//     console.log("AfterLogger Decorator");
//   };
// }

// class Car {
//   @Logger
//   move(speed: number) {
//     console.log("The car is moving with speed " + speed);
//   }
//   stop() {
//     console.log("the car stopped");
//   }
// }

// const car = new Car();
// car.move(80);
