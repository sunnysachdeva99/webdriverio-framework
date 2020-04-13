const p1=new Promise((resolve, reject)=>{
    resolve('video 1 is recorded');
})

const p2=new Promise((resolve, reject)=>{
    resolve('video 2 is recorded');
})

const p3=new Promise((resolve, reject)=>{
    resolve('video 3 is recorded');
})

Promise.all([p1,
    p2,
    p3]).then((messages)=>{
    console.log(messages);
})

Promise.race([p1,
    p2,
    p3]).then((message)=>{
    console.log(message);
})