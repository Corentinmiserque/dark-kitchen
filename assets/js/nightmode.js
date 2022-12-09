const nightmode = document.querySelector(".nightmode");
const body =document.querySelector("body");
nightmode.addEventListener("click", () => {
    body.classList.toggle('night');
})