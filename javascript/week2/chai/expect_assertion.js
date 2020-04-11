/*
Expect:
It's BDD styles which is used the chainable language to construct assertions, 
but they differ in the way an assertion is initially constructed. Check out the Style Guide for a comparison.

The following are provided as chainable getters to improve the readability of your assertions.

The expect interfaces do not modify Object.prototype. So it's better choice in an environment where you cannot or do not want to change Object.prototype.
The expect interface supports custom messages just about everywhere.

expect require is just a reference to the expect function.
 */




describe('chai assertion library', function () {

    it('verify expect assertion', function () {

        // .to
        expect(2).to.equal(2); // Recommended
        expect('Name').equal('Name');

        expect('chai').to.be.a('string') // true
        expect(123).to.be.a('number') // true

        // .not
        expect(function () { }).to.not.throw();
        expect({ a: 1 }).to.not.have.property('b');
        expect([1, 2]).to.be.an('array').that.does.not.include(3);


        // .deep

        // Target object deeply (but not strictly) equals `{a: 1}`
        expect({ a: 1 }).to.deep.equal({ a: 1 });
        expect({ a: 1 }).to.not.equal({ a: 1 });

        // Target array deeply (but not strictly) includes `{a: 1}`
        expect([{ a: 1 }]).to.deep.include({ a: 1 });
        expect([{ a: 1 }]).to.not.include({ a: 1 });

        // Target object deeply (but not strictly) includes `x: {a: 1}`
        expect({ x: { a: 1 } }).to.deep.include({ x: { a: 1 } });
        expect({ x: { a: 1 } }).to.not.include({ x: { a: 1 } });

        // Target array deeply (but not strictly) has member `{a: 1}`
        expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
        expect([{ a: 1 }]).to.not.have.members([{ a: 1 }]);

        // Target set deeply (but not strictly) has key `{a: 1}`
        expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
        expect(new Set([{ a: 1 }])).to.not.have.keys([{ a: 1 }]);

        // Target object deeply (but not strictly) has property `x: {a: 1}`
        expect({ x: { a: 1 } }).to.have.deep.property('x', { a: 1 });
        expect({ x: { a: 1 } }).to.not.have.property('x', { a: 1 })


        // .nested
        expect({ a: { b: ['x', 'y'] } }).to.have.nested.property('a.b[1]');
        expect({ a: { b: ['x', 'y'] } }).to.nested.include({ 'a.b[1]': 'y' });

        // .own
        Object.prototype.b = 2;

        expect({ a: 1 }).to.have.own.property('a');
        expect({ a: 1 }).to.have.property('b');
        expect({ a: 1 }).to.not.have.own.property('b');

        expect({ a: 1 }).to.own.include({ a: 1 });
        expect({ a: 1 }).to.include({ b: 2 }).but.not.own.include({ b: 2 });

        // .ordered
        expect([1, 2]).to.have.ordered.members([1, 2])
            .but.not.have.ordered.members([2, 1]);

        // When .include and .ordered are combined, the ordering begins at the start of both arrays.
        expect([1, 2, 3]).to.include.ordered.members([1, 2])
            .but.not.include.ordered.members([2, 3]);

        // .any
        expect({ a: 1, b: 2 }).to.have.any.keys('a', 'b');
        expect({ a: 1, b: 2 }).to.have.any.keys('c', 'b');
        expect({ a: 1, b: 2 }).to.not.have.any.keys('c', 'd');
        expect({ a: 1, b: 2 }).to.not.have.any.keys('c');

        // .all 
        expect({ a: 1, b: 2 }).to.have.all.keys('a', 'b');
        expect({ a: 1, b: 2 }).to.not.have.all.keys('c', 'd');

        expect({ a: 1, b: 2 }).to.have.keys('a', 'b'); // by default .all


        /*
        .a(type[, msg])
            @param { String } type
            @param { String } msg _optional_
        */

        expect('foo').to.be.a('string');
        expect({ a: 1 }).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');
        expect(Promise.resolve()).to.be.a('promise');
        expect(new Float32Array).to.be.a('float32array');
        expect(Symbol()).to.be.a('symbol');


        //passing custom message
        foo = true;
        expect(foo, "foo should be true").to.be.true;


        // .NaN Asserts that the target is NaN.
        
        // expect('right').to.be.NaN;
        expect(4).not.to.be.NaN
    })
})


