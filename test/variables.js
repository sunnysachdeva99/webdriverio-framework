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



//Objects

obj = {name:'car', color:'red', type:'TATA', move:function() {return 'CAR is Moving'}}
console.log(obj)
console.log(obj.type)
console.log(obj.move())

obj = {name:'car', color:'red', type:'TATA', move:function() {return this.type + ' CAR is Moving'}}
console.log(obj)
console.log(obj.type)
console.log(obj.move())
