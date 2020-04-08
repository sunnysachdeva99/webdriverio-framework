// JS Set Object

/*
JavaScript Set Object
    The JavaScript Set object is used to store the elements with unique values. 
    The values can be of any type i.e. whether primitive values or object references.

    Syntax: new Set([iterable])  
    iterable - It represents an iterable object whose elements will be added to the new Set.

Points to remember
    A set object uses the concept of keys internally.
    A set object cannot contain the duplicate values.
    A set object iterates its elements in insertion order.
*/

console.log('======================== Set Object Begins ============================');
console.log('======================== Set Has 8 Methods ============================');
var mySet;
var myNewSetValues;
var myNewSetKeys;
var myNewSetEntries;

var myWeakSet;
var obj;
var obj1;

var myMap;
var myNewMapValues;
var myNewMapKeys;
var myNewMapEntries;

var myWeakMap;
var obj;
var obj1;


var myArry;
let flg;

    mySet = new Set();
    mySet.add('Sumanta');
    mySet.add(10);
    console.log(mySet);

    // Create a Set Object from Array
    mySet = new Set([10, 20, 'Sumanta', 983]);
    mySet.add('Gspann');
    console.log(mySet);

    myArry = ['Kailash', 35, 'Hyderabad', 500018];
    obj = {name:'Sumanta', location:'Hyd'};

    // Create a new Set Obhect with objects, prim values
    mySet = new Set([obj, 'Thanks', 298]);
    console.log("Obj ==> ", mySet);

    mySet = new Set(myArry);
    mySet.add('Telangana');
    console.log("ArrayObj ==> ", mySet);

    // type of object
    console.log(typeof mySet);

    // Size
    console.log(mySet.size);

    // add method is chainable
    mySet.add('India').add(398).add(true);
    console.log(mySet);

    for(let elements of mySet){
        console.log("value in Set ==> ", elements);
    }

/*
JavaScript Set 'has()' method
    The JavaScript Set has() method indicates whether the Set object contains the specified value. 
    It returns true if the specified value is present, otherwise false.
*/


    flg = mySet.has('India');
    console.log(flg);  // true

    flg = mySet.has('USA');
    console.log(flg);  // false

/*
JavaScript Set 'delete()' method
    The JavaScript Set delete() method is used to remove all the elements from Set object.
*/

    mySet.delete('India');
    console.log(mySet);

    flg = mySet.has('India');
    console.log(flg);  // true


/*
JavaScript Set 'keys()' method
    Despite its name, returns an iterable of the values in the set,
*/

    myNewSetKeys = mySet.keys();
    console.log("Keys ==> ", myNewSetKeys); 

    for(let i = 0; i < mySet.size; i++){
        console.log(myNewSetKeys.next().value);
    }
    
    

/*
JavaScript Set 'values()' method
    The JavaScript Set values() method returns an object of new Set iterator. 
    This object contains the value for each element. It maintains an insertion order.
*/

    myNewSetValues = mySet.values();
    console.log("Values ==> ", myNewSetValues);

    for(let i = 0; i < mySet.size; i++){
        console.log(myNewSetValues.next().value);
    }
    
 
/*
JavaScript Set entries() method
    The JavaScript Set entries() method returns an object of new set iterator. 
    This object contains an array of [value, value] for each element. It maintains an insertion order.  

    Unlike Map, the Set object doesn't use key externally. To keep the values unique it uses the key internally. 
    Thus, Set considers the value of element as a key. In array[value, value], the first value represents the key whereas the second value represents the value of element.
*/
    
    myNewSetEntries = mySet.entries();
    console.log("[value, value]  ==> ", myNewSetEntries);

    for(let i = 0; i < mySet.size; i++){
        console.log(myNewSetEntries.next().value);
    }

    for(let element of myNewSetEntries){
        console.log(element);
    }


/*
JavaScript Set forEach() method
    The JavaScript Set forEach() method executes the specified function once for each value in the Set object. It maintains an insertion order.
    Unlike Map, the Set object doesn't use key externally. To keep the values unique it uses the key internally. Thus, Set considers the value of element as a key.
*/

    mySet.forEach(function(key, value){
        //console.log("For Each... ==> ", value);
        console.log("Key:" + key + "," + " Value:" + value);
    });

/*
JavaScript Set 'clear()' method
    The JavaScript Set clear() method is used to remove all the elements from Set object.
*/

    mySet.clear()
    console.log(mySet.size, mySet);

    console.log('======================== Set Object Ends ============================');
    console.log('======================== Weak Set Object Begins======================');
    console.log('======================== WS Has 3 Methods ============================');

/*

JavaScript WeakSet Object 
    A WeakSet is similar to a Set except that it contains only objects. 
    Since objects in a WeakSet may be automatically garbage-collected, a WeakSet does not have size property. 
    Like a WeakMap, you cannot iterate elements of a WeakSet
    Three methods only - add(object), has(object), delete(object)
*/
    obj = {name:'Sumanta', location:'Hyd'};
    obj1 = {name:'Riaan', location:'Hyd'};

    myWeakSet = new WeakSet([obj]);
    flg = myWeakSet.has(obj); // true, this object added so it's available in WeakSet.
    console.log(flg);

    myWeakSet.add(obj1);
    flg = myWeakSet.has(obj1); // true, this object added so it's available in WeakSet.
    console.log(flg);

    myWeakSet.delete(obj1);
    flg = myWeakSet.has(obj1); // false, this object already deleted, so it's not available in WeakSet.
    console.log(flg);
    

    console.log('======================== Weak Set Object Ends  ======================');
    console.log('======================== Map Object Begins ==========================');
    
// JS Map Object

/*
JavaScript Map Object
    The JavaScript Map object is used to map keys to values. It stores each element as key-value pair. 
    It operates the elements such as search, update and delete on the basis of specified key.

    Syntax: new Map([iterable])  
    iterable - It represents an array and other iterable object whose elements are in the form of key-value pair.

Points to remember
    A map object cannot contain the duplicate keys.
    A map object can contain the duplicate values.
    The key and value can be of any type (allows both object and primitive values).
    A map object iterates its elements in insertion order.
*/


//    let userRoles = new Map([
//     [john, 'admin'],
//     [lily, 'editor'],
//     [peter, 'subscriber']
// ]);


//  Map object created
    myMap = new Map();
    

/*
JavaScript Map set() method
    The JavaScript map set() method is used to add or updates an element to map object with the particular key-value pair. 
    Each value must have a unique key.
*/
    myMap.set(1, 'Sumanta');
    myMap.set(2, 'Riaan');
    myMap.set(3, 'Prabhanjan');
    myMap.set(4, 'Suresh')
    myMap.set(4, 'Sai'); // It not added this key-vaue but replace the existing one which key name is duplicate
    console.log(myMap);

/*
JavaScript Map get() method
    The JavaScript map get() method returns the value of specified key of an element from a Map object.
    The get() method is represented by the following syntax:
*/
console.log(myMap.get(1));
console.log(myMap.get(10)); // undefined because this argument 'key' not available in Map object


/*
JavaScript Map entries() method
    The JavaScript map entries() method returns an object of new map iterator. 
    This object contains the key-value pair for each element. 
    It maintains insertion order.
*/
myNewMapEntries = myMap.entries();
for(let i = 0; i < myMap.size; i++){
    console.log("Key-Value ==> ", myNewMapEntries.next().value);
}

/*
JavaScript Map values() method
    The JavaScript map values() method returns an object of new Map iterator. 
    This object contains the value for each element. It maintains insertion order.
*/
myNewMapValues = myMap.values();
for(let i = 0; i < myMap.size; i++){
    console.log("Values ==> ", myNewMapValues.next().value);
}

/*
JavaScript Map keys() method
    The JavaScript map keys() method returns an object of new Map iterator. 
    This object contains the key for each element. It maintains insertion order.
*/
    myNewMapKeys = myMap.keys();
    console.log("Keys ==> ", myNewMapKeys);
    for(let i = 0; i < myMap.size; i++){
        console.log("Values ==> ", myMap.get(myNewMapKeys.next().value));
    }

/*
JavaScript Map has() method
    The JavaScript map has() method indicates whether the Map object contains the specified key. 
    It returns true if the specified key is present, otherwise false.
*/
    console.log(myMap.has(1)); // true
    console.log(myMap.has(10)); // false

/*
JavaScript Map forEach() method
    The JavaScript map forEach() method execute the specified function once for each key/value pair in the Map object.
*/
myMap.forEach((value, key) =>{
    console.log("Key:" + key +","+ " Value:"+ value);

});

/*
JavaScript Map delete() method
    The JavaScript map delete() method is used to remove all the elements from Map object.
*/

    myMap.delete(1);
    console.log(myMap.has(1)); // false
    console.log(myMap);

    myMap.set(1, 'Sumanta');
    console.log(myMap); 

/*
JavaScript Map clear() method
    The JavaScript map clear() method is used to remove all the elements from Map object.
*/
    myMap.clear();
    console.log(myMap); 

    console.log('======================== Map Object Ends       ==========================');
    console.log('======================== WeakMap Object Begins ==========================');

/*
JavaScript WeakMap Object
    The JavaScript WeakMap object is a type of collection which is almost similar to Map. 
    It stores each element as a key-value pair where keys are weakly referenced. Here, the keys are objects and the values are arbitrary values.
    
    Syntax:
        new WeakMap([iterable])  
    Parameter
        iterable - It represents an array and other iterable object whose elements are in the form of key-value pair.
    
Points to remember
    A WeakMap object allows the keys of object type only.
    In WeakMap, if there is no reference to a key object, they are targeted to garbage collection.
    In WeakMap, the keys are not enumerable. So, it doesn't provide any method to get the list of keys.
    A WeakMap object iterates its elements in insertion order.
*/


// var myWeakMap;
// var obj;
// var obj1;


    myWeakMap = new WeakMap();


/*
JavaScript WeakMap set() method
    The JavaScript WeakMap set() method is used to add or update an element to WeakMap object with the particular key-value pair. 
    Each value must have a unique key (i.e. object).
*/

    var obj2 = {};
    var obj3 = {};
    var obj4 = {};
    var obj5 = {};
    myWeakMap.set(obj1,'Java');
    myWeakMap.set(obj2,'JS');
    myWeakMap.set(obj3,'Mocha');
    myWeakMap.set(obj4,'Chai');
    myWeakMap.set(obj5,'WebdriverIO');
    console.log(myWeakMap); 

/*
JavaScript WeakMap get() method
    The JavaScript WeakMap get() method returns the value of specified key of an element from a WeakMap object.
*/
    console.log(myWeakMap.get(obj1)); 


/*
JavaScript WeakMap delete() method
    The JavaScript WeakMap delete() method is used to remove the specified element from a WeakMap object
*/
    console.log(myWeakMap.delete(obj1));

/*
JavaScript WeakMap has() method
    The JavaScript WeakMap has() method indicates whether the ?WeakMap object contains the specified key. 
    It returns true if the specified key is present, otherwise false.
*/
console.log(myWeakMap.has(obj1)); // false

console.log('======================== WeakMap Object Ends ==========================');