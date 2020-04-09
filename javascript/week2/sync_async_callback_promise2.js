
// Sync Code Example
//Exa 1 - 
//   console.log('================ Sync Code Example ==========================');
//   function otherFunction(){
//     console.log('we are in other function');
//     console.log('do some stuff');
//   }

//   console.log('Start');
//   otherFunction();
//   console.log('End');


// Async Code Example
// console.log('================ Async Code Example ==========================');
//Exa 2 - 
//   console.log('Start');
//   setTimeout(() => {
//       console.log('We are in Timeout');
//   }, 5000);
//   console.log('End');

// Exa2 - 
// console.log('Start');
// function loginUser(email, pwd){
//     setTimeout(() => {
//         return {userEmail: email};
//     }, 500);
// }
// console.log(loginUser('apply@gmail.com', 5645)); // undefined
// console.log('Finish');


// Callback Code Example
// console.log('================Callback Example==========================');
// Exa3 - to resolve the above issue - undefined by using callback

// console.log('Start');
// function loginUser(email, pwd, callback) {
//     setTimeout(() => {
//         console.log('we have data now');
//         callback({ userEmail: email });
//     }, 2000);
// }

// function getUserVideos(email, callback) {
//     setTimeout(() => {
//         callback(['vedeo1', 'video2', 'video3']);
//     }, 1000);
// }

// function getVideoDetails(video, callback) {
//     setTimeout(() => {
//         callback('Title of video: Shikara');
//     }, 500);
// }

// // Calling the above method 
// loginUser('sumanta@gspann.com', 12344, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos);
//         getVideoDetails(videos[0], title => {
//             console.log(title);
//         });
//     });
// });
// console.log('Finish');


// Promise Code Example
// console.log('================ Promise Example ==========================');
// Exa3 - to resolve the above issue - undefined by using Promise

// console.log('Start');
function loginUser(email, pwd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('we have data now');
            resolve({ userEmail: email });
        }, 2000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['vedeo1', 'video2', 'video3']);
        }, 1000);
    });
}

function getVideoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Title of video: Shikara');
        }, 500);
    });
}

// calling the above methods
loginUser('sumanta@gmail.com', 12344)
.then(user => getUserVideos(user.userEmail))
.then(video => getVideoDetails(video[0]))
.then(details =>console.log(details));

// console.log('Finish');


// calling the above methods by using Async Await
// async function displayUser(){
//     const loggedinUser = await loginUser('ksumanta@gmail.com', 2345);
//     const videos = await getUserVideos(loggedinUser.userEmail);
//     const details = await getVideoDetails(videos[0]);
//     console.log(loggedinUser);
//     console.log(videos);
//     console.log(details);
// }
// displayUser();


