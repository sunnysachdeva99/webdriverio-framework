class Car {
    constructor(brand) {
      this.carname = brand;
    }
    static hello() {  // static method
      return "Hello!!";
    }
  }
  
  mycar = new Car("TATA");

  console.log(Car.hello());

  //this is not working fot static methods
  console.log(mycar.hello());