function sample(){
    document.getElementById('sample').innerHTML='Paragraph Changed';
    alert(5+6);
    console.log('5+6')
}


var x, y, z;
x = 10;
y = 20.5;
z = x+y
console.log(x, y, z)

var x, y, z;
x = 10.5;
y = 20.5;
z = x+y
console.log(x, y, z)


var x = 10;
var y =  '10';
console.log(x, y, 'X and Y are equal ', x==y, ', X and Y are strict equal ', x===y)


var str = 'hello';
str = str + ' world';
console.log(str)



var x = 10;
var y =  '10';
console.log(x, y, x+y, y+x, +x+y, +y+x)
console.log(typeof(x), typeof(y), typeof(+y), typeof(+'a'), +'a'+10)

var list = [10, 'hello', 20.533, 'hai'];
console.log(list);
console.log(list.toString());
console.log(list.entries());
console.log(list.join(':'));
console.log(list.pop());
console.log(list);
console.log(list.push('hello', 'world'))
console.log(list);
console.log(list.push('hello', 'world', new Array('abcdefg')))
console.log(list.push(list[list.length-1][0].split('')));
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.unshift('10 removed by Shift'));
console.log(list);
console.log(list.splice(2, 0, 'splice1', 'splice2'));
console.log(list);
console.log(list.splice(2, 3, 'splice3', 'splice4'));
console.log(list);
console.log([1,2,3].concat([4,5,6]).concat(['seven','eight','nine']));
console.log([1,2,3].concat([4,5,6]).concat(['seven','eight','nine']).slice(3,7));

console.log(new Array(10,20,30,40,50))


var current_date = new Date()
console.log(current_date)

var current_date = new Date()
console.log(current_date)
console.log(current_date.getHours())
console.log(current_date.getMonth())
console.log(current_date.getTime())
console.log(current_date.getUTCDate())
console.log(current_date.toDateString())
console.log(current_date.toTimeString())
console.log(current_date.toLocaleTimeString())
console.log(Date.parse('2020-04-05'))
console.log(new Date(Date.parse("March 21, 2012")).toLocaleTimeString())


//functions

function sample(data_type, number){
    if(data_type.toLowerCase()=='even')
    {
        if(number %2==0) {return number} else return number + 'is not Even number'
    }
    else if(data_type.toLowerCase()=='odd')
    {
        if(number %2==0) {return number + 'is Odd number'} else return number + 'is not Odd number'
    }
}

console.log(sample('Odd', 10))

function addAlert(){
    alert('Added the alert !!!')
}

//Objects

obj = {name:'car', color:'red', type:'TATA', move:function() {return 'CAR is Moving'}}
console.log(obj)
console.log(obj.type)
console.log(obj.move())

obj = {name:'car', color:'red', type:'TATA', move:function() {return this.type + ' CAR is Moving'}}
console.log(obj)
console.log(obj.type)
console.log(obj.move())


var obj = {counter : 0};
Object.defineProperty(obj, 'reset', { get : function () {this.counter = 0;}});
Object.defineProperty(obj, 'increment', { get : function() {this.counter++;}});
Object.defineProperty(obj, 'decrement', { get : function() {this.counter--;}});
Object.defineProperty(obj, 'add', { set : function(value) {this.counter += value;}});
Object.defineProperty(obj, 'subtract', { set : function(value) {this.counter -= value;}});
console.log(obj)
obj.add = 5
console.log(obj)
obj.subtract = 2
console.log(obj)
obj.increment;
console.log(obj);
obj.decrement;
console.log(obj);


//strings

var s1 = 'string'
var s2 = new String('string')

if(s1==s2){
    console.log('both s1 and s2 are matched')
}
else{
    console.log('both s1 and s2 are not matched')
}
console.log(s1+s2)
console.log(s2+' is an Object')


var s1 = '2 + 2'
var s2 = new String('2 + 2')
console.log(eval((s1)))
console.log(eval((s2)))
console.log(eval((s2.valueOf())))
console.log(typeof s2)
console.log(s1.charCodeAt('+'))
console.log(s1.includes('+'))
console.log(s2.slice(1,4))
console.log(s1.localeCompare(s2.slice(1,4)))
console.log(s1.search('[\d\s\+]+'))
console.log('   '.concat(s2))
console.log('   '.concat(s2).trim())
console.log(s2.valueOf())
console.log(isNaN(+'a'))



class MyKlass {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    static func(){
        return 'This is a static fucntion'
    }

    nfunc(str1){
        return 'This is a instance function ${str1}'
    }
}


class MyClass extends MyKlass{
    constructor(a, b){
        super(a,b);
        this.x = a;
        this.y = b;
    }
    static func(){
        return 'This is a static fucntion from C class'
    }

    nfunc(str1){
        return 'This is a instance function ${str1} from C class'
    }
    
}

m1 = new MyKlass(10, 20)
console.log(m1)
console.log(m1.nfunc('Hello  John'))
console.log(MyKlass.func())

m1 = new MyClass(10, 20)
console.log(m1)
console.log(m1.nfunc('Hello  John'))
console.log(MyClass.func())


//exceptions
try{
    var x = 5;
    if(x < 10){
        throw 'x values is < 10'
    }
}
catch(err){
    console.log(err)
}


try{
    var x = 15;
    if(x > 10){
        throw 'x values is > 10'
    }
}
catch(err){
    console.log(err)
}
finally{
    console.log('Finally has to execute.')
}
