console.log('Start');

// Resolve param
const promiseResolve = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got data');
        resolve({user:'Sumanta'});
    }, 1000);
});

promiseResolve.then(user => {
    console.log(user);
});

console.log('End');


// Reject param
const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got data');
        reject(new Error('User not logged in'));
    }, 1000);
});


promiseReject.then(user => {
    console.log(user);
}).catch(err => console.log(err.message));



// Promise.all() method
const youtube = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting from youtuble');
        resolve(['Jung', 'Dharitri', 'DDL']);
    }, 1000);
});

const facebook = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting from facebook');
        resolve({name:'fb'});
    }, 1000);
});

Promise.all([youtube, facebook])
.then(result => console.log(result));