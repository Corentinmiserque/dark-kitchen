function prize(){
    //calcul du prix
    let prize=0;
    list_prize=document.querySelectorAll(".meal-card__price")
    list_quantity=document.querySelectorAll(".meals__cart-info__quantity")
    n=list_prize.length
    for (let i=0;i<n;i++){
            a=Number(list_quantity[i].innerHTML)
            b=Number(list_prize[i].innerHTML.substring(0,4).replace(",","."))
            prize=prize+(a*b)
        }
        finalprize=prize.toFixed(2)
    return finalprize
}
function display_prize(){
    let total=prize()
    let total_display=document.querySelector(".meals_total")
    total_display.innerHTML="The total prize is " + total + "€"
}
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
                display_prize()
            }
            
        })
        
        add.addEventListener("click",(event) =>{
            let test = event.target.parentElement.parentElement;
            let number = Number(test.lastElementChild.innerHTML);
            number=number+1
            test.lastElementChild.innerHTML=number
            display_prize()
        })
    }
}