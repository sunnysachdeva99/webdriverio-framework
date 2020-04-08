const posts = [
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'}
];

function getPosts()
{
    setTimeout(() => {
            let output = '';
            posts.forEach((post, index) => {
                output += `${post.title} `;
            });
            console.log(output);
    }, 1000);
}

/*
without call back mechanism

function createPost(post)
{
    setTimeout(() =>{
        posts.push(post);
    }, 2000);
}
getPosts();
createPost(
    {
        title:'post three', body:'this is post three'
    }
);*/

function createPost(post, callback)
{
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
    
}

createPost(
    {title:'post three', body:'this is post three'}, getPosts
);