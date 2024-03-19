function Http(classPrototype: Object, methodName: string, indexParam: number) {
  if (indexParam === 0) console.log("this is request object");
  else if (indexParam === 1) console.log("this is response object");
  else console.log("This is not request nor response");
}

class BookController {
  getBook(req: Object, @Http res: Object) {
    console.log(req, res);
  }
}
