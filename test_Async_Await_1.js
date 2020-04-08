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

function createPost(post)
{
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err)
            {
                resolve();
            }else
            {
                reject('Error: Something went wrong');
            }
        }, 2000);
        
    });
    
}

async function init()
{
    await createPost(
        {
            title:'post three', body:'this is post three'
        }
    );
    getPosts(); 
}
init();