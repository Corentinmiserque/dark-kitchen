const menu = document.querySelector(".list_button");
menu.addEventListener("click",(e) =>{
if(e.target.classList.contains('button')){
    menu.style.setProperty('--underline-width', `${e.target.offsetWidth}px`);
    menu.style.setProperty('--underline-offset-x', `${e.target.offsetLeft}px`)
    menu.style.setProperty('--underline-offset-y', `${e.target.offsetTop}px`);
}})
