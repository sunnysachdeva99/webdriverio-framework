/*
JavaScript Encapsulation
    The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. 
    It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -
    Use var keyword to make data members private.
    Use setter methods to set the data and getter methods to get that data.
    The encapsulation allows us to handle an object using the following properties:

    Read Only - In this case, we use getter methods only.
    Write Only - In this case, we use setter methods only.
*/

// Example 1
class Student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }
}

var stud = new Student();
stud.setName("John");
stud.setMarks(80);
console.log(stud.getName() + " " + stud.getMarks());



// Example 2 - we validate the marks of the student.
class Students {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        if (marks < 0 || marks > 100) {
            console.log('Invalid Marks');
        }
        else {
            this.marks = marks;
        }
    }
}
var studs = new Students();
studs.setName("John");
studs.setMarks(110);
console.log(studs.getName() + " " + studs.getMarks());


// Example 3 - we perform prototype-based encapsulation.
// Getter & Setter methods
function Vehicles() {
    this.vname = '';

    Object.defineProperties(this, {
        'VechileDetails': {
            get: function () {
                return this.vname;
            },
            set: function (name) {
                this.vname = name;
            }
        }
    });
}

var vehicle = new Vehicles();
vehicle.VechileDetails = 'Tata';
console.log(vehicle.vname);
console.log(vehicle.VechileDetails);










