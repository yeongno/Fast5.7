class PersonExtends<T extends string | number>{
  //T는 string과 number만 가능한 union타입인 것이다.
  private _name: T;

  constructor(name: T){
    this._name = name;
  }
}

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true);
