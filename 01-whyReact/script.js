
const firstbasket = document.querySelector('.basket1 span');
const secondbasket = document.querySelector('.basket2 span');
const leftArrow  = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const totalApples = 5;
let secondBasketCount = 0;
let firstBasketCount = totalApples - secondBasketCount;


firstbasket.innerText= firstBasketCount;
secondbasket.innerText= secondBasketCount;

rightArrow.addEventListener('click',()=>{
    if(firstBasketCount > 0){
        firstBasketCount -- ;
        firstbasket.innerText= firstBasketCount;
        secondBasketCount ++ ;
        secondbasket.innerText= secondBasketCount;
    }
    
})
leftArrow.addEventListener('click',()=>{
    if(secondBasketCount > 0){
        firstBasketCount ++ ;
        firstbasket.innerText= firstBasketCount;
        secondBasketCount -- ;
        secondbasket.innerText= secondBasketCount;
    }
})

  