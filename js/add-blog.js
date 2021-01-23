import fetch from "./http.js";

const addBlog = document.querySelector('#add-blog');

addBlog.addEventListener("submit", addNewBlog)


function addNewBlog(e){
    e.preventDefault()
    e.stopPropagation()
   
    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const content = document.querySelector('#content').value;
    const description = document.querySelector('#description').value;
    const image = document.querySelector('#image').value;

    const post = {
        title: name,
        author: author,
        content: content,
        image: image,
        description: description,
        createDate: new Date().toDateString()
    }

    fetch("POST", "/posts", post)
    .then( res => {
        console.log(res);
    })
}
