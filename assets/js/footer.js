//open menu
const footerMenu= document.querySelectorAll(".footer__menu");
for(let e of footerMenu){
    e.addEventListener("click", () => {
    e.classList.toggle('open');
}
)
}
