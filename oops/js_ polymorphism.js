/*
JavaScript Polymorphism
    The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. 
    It provides an ability to call the same method on different JavaScript objects. 
    As JavaScript is not a type-safe language, we can pass any type of data members with the methods.
    Overloading concept NOT supported in Polymorphism

*/
// Overriding (Dynamic polymorphim)
// Exa 1 - calling parent method from child class
class A {
    display() {
        console.log('Parent A - display()- method is invoked');
    }
}

class B extends A {
}
var b = new B();
b.display();


// Exa 2 - where a child and parent class contains the same method. Here, the object of child class invokes both classes method
class C {
    display() {
        console.log('Parent C - display()- method is invoked');
    }
}
class D extends C {
    display() {
        console.log('Child D - display()- method is invoked');
    }
}

var a = [new C(), new D()]
a.forEach(function (msg) {
    msg.display();
});  


// Overloading concepts not supported in Javascript (Static polymorphim)
class E{
    show(name){
        console.log("first method");
    }

    show(name, age){
        console.log("second method");
    }

    show(){
        console.log("last method method");
    }
}

var e = new E();
e.show();
e.show('sumanta');
e.show('sumanta', '30');

