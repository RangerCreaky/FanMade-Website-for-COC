let cards = document.getElementsByClassName('card');
let index = 0;
let length = cards.length;
const left = document.getElementsByClassName('left')[0];
const right = document.getElementsByClassName('right')[0];

// End cases
right.addEventListener('click' , ()=>{
    

    if(index != length-1){
        cards[index].classList.toggle('inactive');
        index++;
        cards[index].classList.toggle('inactive');
    }
    
})

left.addEventListener('click' , ()=>{
    if(index != 0){
        cards[index].classList.toggle('inactive');
        index--;
        cards[index].classList.toggle('inactive');
    
    }
    
})