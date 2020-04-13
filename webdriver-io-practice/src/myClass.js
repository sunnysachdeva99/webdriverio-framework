class MyClass{
    constructor()
    {
        console.log("initiate");
    }

    add(arg1, arg2)
    {
        this.sayMockFun();
        return arg1+arg2;
    }

    //this is for spy method
    callAddFn(arg1, arg2)
    {
        var result = this.add(arg1, arg2);
        return result;
    }

    //this is for the mock the function

    sayMockFun()
    {
        console.log("Hello Mock functionality");
    }

    testPromise()
    {
        return new Promise(function (resolve, reject)
        {
            setTimeout(() => resolve(3), 3000);
        }).then(function(result)
        {
            return result * 3;
        });
    }
}
module.exports = MyClass;