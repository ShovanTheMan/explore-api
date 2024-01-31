function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
function displayPost(data){
    const postContainer = document.getElementById('posts-container');
    for(const posts of data){
        
        console.log(posts);
     const div = document.createElement('div');
     div.classList.add('post')
     div.innerHTML = `
        <h4>User-${posts.userId}</h4>
        <h5>Post: ${posts.title}</h5>
        <p>Post Description: ${posts.body}</p>

     `;
     postContainer.appendChild(div);
    }
   
}
loadPosts();