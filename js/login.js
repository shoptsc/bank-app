const btn = document.querySelector('#btn');

btn.addEventListener('click', signin);

function signin(e) {
    e.preventDefault()
    window.location.href = "signin.html"
}