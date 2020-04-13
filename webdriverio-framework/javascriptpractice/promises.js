let p = new Promise((resolve, reject) =>{
    let a =1+1;
    if(a==2){
        resolve("successfull")
    }
    else{
        reject("failed")
    }

})

p.then((message)=>{
    console.log('this is in the then condition '+message);
}).catch(()=>{
    console.log('This is in the catch block '+message);
})