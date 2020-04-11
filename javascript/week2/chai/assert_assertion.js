/*
Assert
The assert style is very similar to node.js’ included assert module, 
with a bit of extra sugar. Of the three style options, assert is the only one that is not chainable. 
The Assert API covers the TDD assertion style.

The assert interfaces do not modify Object.prototype. So it's better choice in an environment where you cannot or do not want to change Object.prototype.
The assert interface supports custom messages just about everywhere.
*/


describe('chai assertion library', () => {

    it('verify should assertion', () => {

        let foo = 'bar'
        beverages = { tea: ['chai', 'matcha', 'oolong'] };

        assert.typeOf(foo, 'string'); // without optional message
        assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
        assert.equal(foo, 'bar', 'foo equal `bar`');
        assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');

        let foos = true;
        assert.isTrue(foos, "foo should be true");
    })
})