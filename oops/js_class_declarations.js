/*
JavaScript Classes
    In JavaScript, classes are the special type of functions. 
    We can define the class just like function declarations and function expressions.
    The JavaScript class contains various class members within a body including methods or constructor. 
    The class is executed in strict mode. So, the code containing the silent error or mistake throws an error.
    The class syntax contains two components:
        * Class declarations
        * Class expressions
*/


/*
Class Declarations
    A class can be defined by using a class declaration. A class keyword is used to declare a class with any particular name. 
    According to JavaScript naming conventions, the name of the class always starts with an uppercase letter.

    To create Object by 'new' keyword
*/

class Car {

    constructor(brand) {
        this.carName = brand;
    }

    present() {
        console.log('Car class created by new keyword: ' + this.carName);
    }

    get carNameText() {
        return 'Getter method of Car and car brand is: ' + this.carName;
    }
}

var carObj = new Car("Tata");
console.log(carObj);
carObj.present();
console.log(carObj.carNameText);


class Bike {

    static sounds() {
        return this.brand + ' makes sound called - tinkling';
    }

    static sound(objName) {
        return objName.brand + ' makes sound called - tinkling';
    }

    static fuel(name) {
        this.fuelType = name;
        return 'Fuel type is: ' + this.fuelType;
    }

    set setBikeName(brand) {
        this.brand = brand;
    }

    get _bikeNameText() {
        return 'Getter method of Bike and bike brand is: ' + this.brand;
    }

}

var bikeObj = new Bike();
bikeObj.setBikeName = 'Honda';
console.log(bikeObj);
console.log(bikeObj._bikeNameText);
console.log(Bike.fuel('Petrol'));
console.log(Bike.sounds());
console.log(Bike.sound(bikeObj));

// console.log(bikeObj.sound()); // can't call a static method from the object.


class Birds {
    set birdName(name) {
        this.name = name;
    }

    get _getBirdName() {
        return 'Bird name is: ' + this.name;
    }
}


var birdObj = new Birds();
birdObj.birdName = 'Sparrow';
console.log(birdObj._getBirdName);


// To create Object by literal 
var literalAnimalObj = {
    animalName: 'Elephant',
    color: 'Black',
    size: 'Big',
    sound: () => {
        return literalAnimalObj.animalName + ' makes sound called - trumpet';
    }
};

console.log(literalAnimalObj);
console.log(literalAnimalObj.sound());


/*
Hoisting:
    Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
    That means that you must declare a class before you can use it:
*/

//You cannot use the class yet.
// This would raise an error.

// mycar = new Bus("Mahindra")

class Bus {
    constructor(brand) {
      this.busname = brand;
    }
  }



// Static method

class Animal {
    constructor(type) {
        this.type = type;
    }
    identify() {
        console.log(this.type);
    }
    static create(type) {
        return new Animal(type);
    }
}

var mouse = Animal.create('Mouse');
mouse.identify(); // mouse