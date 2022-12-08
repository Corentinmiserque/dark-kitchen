function panier(){

    list_card=document.querySelectorAll(".meal-card__cart-info");
    for(let card of list_card){
        remove=card.children[0]
        add=card.children[1]
        min=0;
        remove.addEventListener("click",(event) =>{
            let test = event.target.parentElement.parentElement;
            let number = Number(test.lastElementChild.innerHTML); 
            if(number>min){
                number=number-1
                test.lastElementChild.innerHTML=number
            }
        })
        add.addEventListener("click",(event) =>{
            let test = event.target.parentElement.parentElement;
            let number = Number(test.lastElementChild.innerHTML);
            number=number+1
            test.lastElementChild.innerHTML=number
        })
    } 
}