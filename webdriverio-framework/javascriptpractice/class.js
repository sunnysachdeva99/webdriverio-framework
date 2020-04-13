class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }

  var a= new Car("Tata");
  console.log(a.present());

  //

  console.log(a.carname);