const posts = [
    {title:"post one", desc:"this is post one"},
    {title:"post two", desc:"this is post two"}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
        output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            
            if (!error){
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
            },2000);
    });
}
// createPost();
// getPosts();

// Using Then
// createPost({ title: "post three", desc:"this is post three"})
// .then(getPosts)
// .catch(err => console.log(err));

// Async Await
async function init(){
    await createPost({ title: "post three", desc:"this is post three"});
    getPosts();
}
init();