/*

Package is available through npm:

npm install chai

Assert

The assert style is very similar to node.js’ included assert module, with a bit of 
extra sugar. Of the three style options, assert is the only one that is not chainable. 

The assert style is exposed through assert interface. This provides the classic assert-dot notation, 
similar to that packaged with node.js

The BDD style comes in two flavors: expect and should. Both use the same chainable language 
to construct assertions, but they differ in the way an assertion is initially constructed. 
In the case of should, there are also some caveats and additional tools to overcome the caveats.

Expect

The BDD style is exposed through expect or should interfaces. In both scenarios, you chain 
together natural language assertions.

Should

The should style allows for the same chainable assertions as the expect interface, however it 
extends each object with a should property to start your chain. This style has some issues when 
used with Internet Explorer, so be aware of browser compatibility.

Language Chains
The following are provided as chainable getters to improve the readability of your assertions.

Chains

to
be
been
is
that
which
and
has
have
with
at
of
same
but
does
still

*/

//assert example

var assert1 = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

//console.log(assert1)

console.log(assert1.typeOf(foo, 'string')); // without optional message
console.log(assert1.typeOf(foo, 'string', 'foo is a string')); // with optional message
console.log(assert1.equal(foo, 'bar', 'foo equal `bar`'));
console.log(assert1.lengthOf(foo, 3, 'foo`s value has a length of 3'));
console.log(assert1.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea'));

//expect example

var expect1 = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };


  console.log(expect1(foo).to.be.a('string'));
  console.log(expect1(foo).to.equal('bar'));
  console.log(expect1(foo).to.have.lengthOf(3));
  console.log(expect1(beverages).to.have.property('tea').with.lengthOf(3));


//should() example

var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

console.log(foo.should.be.a('string'));
console.log(foo.should.equal('bar'));
console.log(foo.should.have.lengthOf(3));
console.log(beverages.should.have.property('tea').with.lengthOf(3));
