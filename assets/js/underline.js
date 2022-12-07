const menu = document.querySelector(".meals__categories");
let pleft = window.getComputedStyle(menu).getPropertyValue('padding-left');
pleft = Number(pleft.slice(0,  2));

function init() {
    var firstFilter = menu.firstElementChild;
    var last_button = firstFilter;
    menu.addEventListener("click",(e) =>{
    if(e.target.classList.contains('meals__filter-btn')){
        menu.style.setProperty('--underline-width', `${e.target.offsetWidth}px`);
        last_button=e.target
        menu.style.setProperty('--underline-offset-x', `${e.target.offsetLeft - pleft}px`)
    }})


    window.addEventListener("resize", (event) => {
        menu.style.setProperty('--underline-offset-x', `${last_button.offsetLeft - pleft}px`)
        menu.style.setProperty('--underline-width', `${last_button.offsetWidth}px`);
    });
    menu.style.setProperty('--underline-width', `${firstFilter.offsetWidth}px`);
    menu.style.setProperty('--underline-offset-x', `${firstFilter.offsetLeft - pleft}px`);
}