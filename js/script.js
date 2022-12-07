const menu = document.querySelector(".list_button");
var last_button="";
menu.addEventListener("click",(e) =>{
if(e.target.classList.contains('button')){
    menu.style.setProperty('--underline-width', `${e.target.offsetWidth}px`);
    last_button=e.target
    menu.style.setProperty('--underline-offset-x', `${e.target.offsetLeft}px`)
}})



addEventListener("resize", (event) => {
    menu.style.setProperty('--underline-offset-x', `${last_button.offsetLeft}px`)
    menu.style.setProperty('--underline-width', `${last_button.offsetWidth}px`);
});
