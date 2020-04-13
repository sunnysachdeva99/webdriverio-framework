class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello() {  // static method
      return "Hello!!";
    }
  }
  
  mycar = new Car("Ford");
  
  //Call 'hello()' on the class Car:
  console.log(Car.hello());
  
  //and NOT on the 'mycar' object:
  console.log(mycar.hello());
  //this would raise an error.