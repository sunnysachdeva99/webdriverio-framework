/*

Normally the code execution happens in Sync mode means control will execute first function, then second..so on. in sequesnce.
But when we get the scenarios that we supposed to wait for first method then after second method will be executed. It's an dependency on one another.
In this case, it will will not wait for first method, but second method will be executed without bothering about the first method.
It's independent execution.

Exa: setTimeout(function, millisecond); - in this method, it's return after the time specified so it's next metod will be executed immediately. 
So our requirement is, next metod should not be executed untill first method executed. So we have to maintain the sync between the methods. 

To fulfill the requirement so we have to follow this process.
Process : Sync = (Async => Callback => Promise => Async Await)

*/

/*
Steps:
    => Sync Code
    => Async Code
    => Callback Code
    => Promise
    => Async Await
*/

let loggedinUser;
let videos;
let title;

// SYNC
// Exa:1 for Sync
// function loginUser(email, password) {
//     console.log('I am logged in as below: ');
//     return email + " " + password;
// }
// function getVideos(email) {
//     return ['vodeo', 'vodeo', 'video'];
// }
// function getVideoTitle(video) {
//     return 'title of the video: ' + video;
// }

//Calling above methods
// loggedinUser = loginUser('sumanta@gmail.com', 12345);   // 1st execution
// videos = getVideos('sumanta@gmail.com');                // 2nd execution              
// title = getVideoTitle('DDL');                           // 3rd execution

// console.log(loggedinUser);
// console.log(videos);
// console.log(title);


// ASYNC
// Exa:2 'Async' where we get in squence order execution
// function loginUser(email, password) {
//     setTimeout(() => {
//         console.log('I am logged in as below: ');
//         return email + " " + password;
//     }, 700);
// }

// function getVideos(email) {
//     setTimeout(() => {
//         console.log('Video');
//         return ['vodeo', 'vodeo', 'video'];
//     }, 900);
// }

// function getVideoTitle(video) {
//     setTimeout(() => {
//         console.log('Title');
//         return 'title of the video: ' + video;
//     }, 500);
// }

//Calling above methods
// loggedinUser = loginUser('sumanta@gmail.com', 12345);   // 2nd execution
// videos = getVideos('sumanta@gmail.com');                // 3rd execution              
// title = getVideoTitle('DDL');                           // 1st execution

// console.log(loggedinUser);
// console.log(videos);
// console.log(title);



// CALLBACK - here we have achieved the sync 
// Exa:3 'callback' to overcome the async issue in Exa:2
/*
function loginUser(email, password, callback) {
    setTimeout(() => {
        //console.log('I am logged in as below: ');
        callback({userEmail: email});
    }, 1000);
}

function getVideos(email, callback) {
    setTimeout(() => {
        callback (['video1', 'video2', 'video3']);
    }, 700);
}

function getVideoTitle(video, callback) {
    setTimeout(() => {
        callback ('\'DDL\'');
    }, 300);
}

//Calling above methods
loginUser('sumanta@gmail.com', 12345, function(user){   // 1st execution
    console.log('Loggedin as: ' + user.userEmail);                        

    getVideos(user.userEmail, function(videos){         // 2nd execution
        console.log('Videos are: ', videos);                    

        getVideoTitle(videos[0], function(title){       // 3rd execution
            console.log('Title of this', videos[0],'is', title);

        }); //3rd funtion ends
    }); //2nd funtion ends
}); //1st funtion ends

*/


// PROMISE
// Exa:4 'promise' to overcome the callback issue in Exa:3
function loginUser(email, password) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve({userEmail: email});
        }, 1000);
    });
}

function getVideos(email) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 700);
    });
}

function getVideoTitle(video) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('\'DDL\'');
        }, 300);
    });
}

//Consumer of Promise call
// loginUser('sumanta@gmail.com', 12344)
// .then(user => getVideos(user.userEmail))
// .then(video => getVideoTitle(video[0]))
// .then(details => console.log('Title of this','is', details))


// Async --- await
// to change while calling that Pormise functions
async function displayUser(){
    loggedinUser = await loginUser('sumanta@gmail.com', 12344);
    videos = await getVideos(loggedinUser.userEmail);
    title = await getVideoTitle(videos[0])

    console.log('I am logged in as: ' + loggedinUser.userEmail);
    console.log('All Videos: ' , videos);
    console.log('Title of the' + videos[0] + ' is ' + title);
}
displayUser();