// Map
var m1= new Map()
let obj1 = {}
let func = function() {}
m1.set('string 1', 'first value is associated with string 1')
m1.set(obj1, 'value is associated with object')
m1.set(func, 'value is associated with fucntion')

console.log(m1)
m1.set({}, 'value is associated with object')
console.log(m1)
m1.set('string 1', 'value is associated with string 2')
console.log(m1)
console.log(m1.size)
let obj = {}
console.log(m1.get(obj1))
console.log(m1.get(func))

console.log('Iterating the items from Map')
//map can allow duplicates ay function and object level
for (let item of m1){
    console.log(item)
}
console.log('Iterating the Keys from Map')
for (let item of m1.keys()){
    console.log(item)
}

console.log('Iterating the values from Map')
for (let item of m1.values()){
    console.log(item)
}

console.log('Iterating the items though forEach')
m1.forEach(function(value, key){
    console.log(key, ' : ', value)
})

console.log('Array from Map : ',Array.from(m1))
m2 = new Map([['a', 1], ['b', 2], ['c', 3]])
console.log('Map from Array of Array: ', m2)
let m3 = new Map([...m1, ...m2])
console.log(m3)


//sets

let s1 = new Set()
var s2 = new Set()
s2.add(10)
s2.add(new Set([10, 20, 30]))
s1.add('hello')
console.log(new Set([s2, s1]))
console.log(s2.entries())

for(let [key, value] of s2.entries()){
    console.log(key, ' : ', value)
}
s1.add(10)
console.log('interset of s1 : ', new Set([...s2].filter(x=>s1.has(x))))
console.log('difference of s1 : ', new Set([...s2].filter(x=> (!s1.has(x)))))