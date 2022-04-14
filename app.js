let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts =document.getElementById("posts");

// add submit btn event listener with formValidation func
form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
});

let formValidation = () => {
    // prevent blank input field submitions
    if (input.value === "") {
        msg.innerHTML = "Post can't be blank, you silly goose!";
    } else {
        msg.innerHTML = "";
        // trigger acceptData func
        acceptData();
    }
};

// accept data from input field & store in data object
let data = {};
let acceptData = () => {
    data["text"] = input.value;
    createPost();
};

// create posts using template literals to inject needed html
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

// delete posts
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

// edit posts
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}