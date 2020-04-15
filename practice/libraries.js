//Immutable JS

const imm = require('immutable')
var m1 = imm.List.of('Hello')
m1.insert(0,'Hai')
m1.push('World')
console.log(m1)
var m2 = imm.Map({name:'Ram', year:2020})
console.log(m2)
//m2.push({msg:'Hello!!'})
//console.log(m2)

const data = imm.fromJS({ my: { nested: { name: 'Will' } } });
const goodName = data.getIn(['my', 'nested', 'name']);
console.log(goodName);

const badName = data.getIn(['my', 'lovely', 'name']);
console.log(badName);

