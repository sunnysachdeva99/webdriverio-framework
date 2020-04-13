class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod, color) {
      super(brand);
      this.model = mod;
      this.color=color;
    }
    show() {
      return this.present() + 'Model is '+this.model+ ' and Color : '+this.color;
    }
  }
  
  mycar = new Model("TATA", "2018", "Red");
  console.log(mycar.show());