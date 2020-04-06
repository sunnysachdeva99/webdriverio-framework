/*
JavaScript static Method
    The JavaScript provides static methods that belong to the class instead of an instance of that class. So, 
    an instance is not required to call the static method. These methods are called directly on the class itself.

Points to remember
    The static keyword is used to declare a static method.
    The static method can be of any name.
    A class can contain more than one static method.
    If we declare more than one static method with a similar name, the JavaScript always invokes the last one.
    The static method can be used to create utility functions.
    We can use this keyword to call a static method within another static method.
    We cannot use this keyword directly to call a static method within the non-static method. In such case, 
    we can call the static method either using the class name or as the property of the constructor.
*/


// Example 1

class StaticTest {
    static display() {
        return "static method is invoked"
    }
}
console.log(StaticTest.display());



// Example 2 - more than one static method
class StaticTestOne {
    static display1() {
        return "static method1 is invoked"
    }
    static display2() {
        return "static method2 is invoked"
    }
}

console.log(StaticTestOne.display1());
console.log(StaticTestOne.display2());


// Example 3 - more than one static method with same name, JavaScript always invokes the LAST ONE.
class StaticTestTwo {
    static display() {
        return "static method1 with same name is invoked"
    }
    static display() {
        return "static method2 with same name is invoked again"
    }
}

console.log(StaticTestTwo.display()); // last one method is invoked
console.log(StaticTestTwo.display()); // last one method is invoked



// Example 4 - To invoke a static method within the constructor.
class StaticTestThree {

    constructor(){
        //console.log(StaticTestThree.display());       // thise two ways we can invoke the statis method within constructor
        console.log(this.constructor.display());

    }
    static display() {
        return "Class StaticTestThree => static method is being invoked within constructor"
    }

}
var staticTestThree = new StaticTestThree();


// Example 5 - To invoke a static method within the non-static method
class StaticTestFour {

    constructor(){
        //console.log('Object created by invoking the constructor');

    }
    static display() {
        return "static method is being invoked within non-static method"
    }

    show(){
        console.log("Class StaticTestFour => ", StaticTestFour.display());       // thise two ways we can invoke the statis method within constructor
        // console.log("Class StaticTestFour => ", this.constructor.display());

    }
}

var staticTestFour = new StaticTestFour();
staticTestFour.show();

