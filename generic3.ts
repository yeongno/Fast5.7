function helloArray<T>(message: T[]):T{
  return message[0];
}


helloArray(['Hello', "World"]);
helloArray(["Hello", 5]);

function helloTuple<T, K>(message: [T, K]): T{
  return message[0];
}

helloTuple(["Hello", ["World"]]);
helloTuple(["Hello", 5]);
