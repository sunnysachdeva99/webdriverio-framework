// callbacks
//https://blog.risingstack.com/node-js-async-best-practices-avoiding-callback-hell-node-js-at-scale/

function add(a,b, callback){
    console.log('a + b is : ', a+b);
callback();
}

function callback(){
    console.log('callback funciton is called');
}


function subtract(a,b, callback){
    
    setTimeout(function(){
        console.log('a - b is : ', a-b);
    }, 10000)
callback();
}

function print_callback(){
    console.log('callback funciton is called');
}

//add(10, 15, callback)
//subtract(10, 15, print_callback)

//promises

var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();

var car_type = 'TATA';

var TATA_car = new Promise(function(resolve, reject){
    if(car_type.toLowerCase() == 'tata'){
        var car = {
            name:'SUV', type:'Petrol', wheels:4
        }
        setTimeout(function(){
            resolve(car);
        }, 10000)
    }
    else{
        var reason = new Error('CAR is not TATA')
        reject(reason);
    }
})

function check_wheel(car){
    if(car.wheels==4){
        return Promise.resolve('car has 4 wheels only')
    }
    else{
        return Promise.reject('CAR has not 4 wheels')
    }
}

var ff_car = function(){
        TATA_car.then(function(fulfilled){
            console.log(fulfilled)
        }).catch(function(error){
            console.log(error.message)
        })
        }

ff_car();

var car_check = function(){
    TATA_car.then(check_wheel).then(function(fulfilled){
        console.log(fulfilled)
    }).catch(function(error) {
        console.log(error.message)
    })
}

car_check();