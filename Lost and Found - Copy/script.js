let btn = document.querySelector(".container-box button");
let n = document.querySelector(".container-box");
let post = document.querySelector(".post-details");

btn.addEventListener('click', function () {
    n.style.display = 'none';
    post.style.display = 'block';
    document.querySelector(".container").style.height = '650px';
})