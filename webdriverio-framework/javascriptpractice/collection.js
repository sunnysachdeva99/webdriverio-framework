console.log('-----------Collections examples --------------');

// Set objects are collections of values. You can iterate its elements in insertion order. 
// A value in a Set may only occur once; it is unique in the Set's collection

var mySet;

    mySet = new Set();
    mySet.add('Rama Reddy');
    mySet.add(32);
    mySet.add('Gspann');
    mySet.add('Hyd');

    console.log(mySet);

    console.log(mySet.size);

   console.log(mySet.entries());

   console.log('Gspann is present so, '+mySet.has('Gspann'));

   console.log('Updated size is : '+mySet.size);

   console.log('Mohan is not present so, '+mySet.has('Mohan'));

   for(const item of mySet){
    console.log('Value is: , '+item);
   }

   console.log('Deleting '+mySet.delete('Hyd'));

   console.log('Hyd is deleted. so, '+mySet.has('Hyd'));

   //creating new object for exising set
   mySet = new Set([5, 'Mohan', 184]);
   mySet.add('Reddy');
   console.log(mySet);

   var array = ['Subbu', 27, 'Hyderabad', 15];
    obj = {name:'Lakshmi', Role:'Lead'};

    // Create a new Set Object
    mySet = new Set([obj, array, 'Infosys', 31]);
    console.log("Obj ==> ", mySet);

    setKeys = mySet.keys();
    console.log("Keys ==> ", setKeys); 

    for(let i = 0; i < mySet.size; i++){
        console.log('Key is : ', setKeys.next().value);
    }

    setValues = mySet.values();
    console.log("Values ==> ", setValues); 

    for(let i = 0; i < mySet.size; i++){
        console.log('Value is : ', setValues.next().value);
    }


   console.log('------Mapping --------------');

   //A Map object is a simple key/value map and can iterate its elements in insertion order.


   var sayings = new Map();
    sayings.set('dog', 'woof');
    sayings.set('cat', 'woof');
    sayings.set('elephant', 'toot');
    console.log('Size : '+sayings.size); 

    console.log(sayings.get('fox')); // undefined
    console.log(sayings.has('bird')); // false
    console.log('deleting dog');
    console.log('deleted successfully. so, '+sayings.has('dog')); // false

    for (let [key, value] of sayings) {
        console.log(key + ' goes ' + value);
    }

    //It will clear all values from map
    sayings.clear();
    console.log('After clear Size is : '+sayings.size); 

   

    
