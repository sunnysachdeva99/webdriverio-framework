/*
Should
    The should style allows for the same chainable assertions as the expect interface, 
    however it extends each object with a should property to start your chain. 
    This style has some issues when used with Internet Explorer, so be aware of browser compatibility.
*/


describe('chai assertion library', () => {
    it('verify should assertion', () => {
        let foo = 'bar'
        beverages = { tea: ['chai', 'matcha', 'oolong'] };

        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.lengthOf(3);
        beverages.should.have.property('tea').with.lengthOf(3);

        let user = { name: "taj", pets: ["tobi", "loki", "jane", "bandit"] };
        user.should.be.an.instanceOf(Object).and.have.property("name", "taj");

        user.should.have
            .ownProperty("name")
            .which.not.have.length(4)
            .and.be.equal({name:"taj"});
    })
})