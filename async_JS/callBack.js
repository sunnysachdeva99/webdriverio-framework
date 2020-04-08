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


function createPost(post, callback){
    setTimeout(()=>{
    posts.push(post);
    callback();
    },2000);
}
createPost({title:"post three", desc:"this is post three"},getPosts);