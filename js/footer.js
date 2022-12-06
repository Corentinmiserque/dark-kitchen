//open menu
const menu= document.querySelectorAll(".footer__menu");
for(let e of menu){
    e.addEventListener("click", () => {
    e.classList.toggle('open');
}
)
}
