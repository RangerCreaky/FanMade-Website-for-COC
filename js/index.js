console.log('hello world');

let availableVals = ["archerqueen" , "barb" , "pekka" , "barbKing" , "builder" , "goblin" , "hog" , "kingTower" , 
                    "pekka" , "archerqueen" , "barb" , "barbKing" , "builder" , "goblin" , "hog" , "kingTower" , 
                    ];
randGenerator();

let userClicked = [];


    console.log(userClicked.length);
    let divs = document.getElementsByClassName('box');
    Array.from(divs).forEach(element => {
            element.addEventListener('click' ,()=>{
                if ((!element.classList.contains('disabled')) && (userClicked.length < 2)) {
                    element.classList.add('disabled');
                    flipElement(element);
                    userClicked.push(element);
                    if(userClicked.length == 2){
                        checkAnswer();
                    } 
                }
            })
    });


function checkAnswer() {
    if((userClicked[0] != userClicked[1]) && (userClicked[0].id == userClicked[1].id)){
        userClicked = [];
    }
    else{
        setTimeout(() => {
            flipElementToQ(userClicked[0]);
            flipElementToQ(userClicked[1]);
            userClicked[0].classList.remove('disabled');
            userClicked[1].classList.remove('disabled');
            userClicked = [];
        }, 1000);
    }


}

function flipElementToQ(target) {
    let html = `<img src="images/questionMark.png" alt="">`;
    target.innerHTML = html;
}

function flipElement(element) {
    console.log("to element" , element);
    element.innerHTML = `<img src="images/${element.id}.png" alt="">`; 
}

function randGenerator() { 
    let count = availableVals.length-1;
    while(count >= 0){
        let randomNum = Math.floor(Math.random()*count);
        
        $(`.box-${count}`).attr("id" , `${availableVals[randomNum]}`);
        availableVals.splice(randomNum , 1);
        count--;

    }
    assignImages();
}


function assignImages() {
    let classesList = $('.box');
    Array.from(classesList).forEach(element => {
        element.innerHTML = `<img src="images/${element.getAttribute('id')}.png" alt="">`
    });

   setTimeout(() => {
       flipAllElements();
   }, 2000);
}


function flipAllElements() {
    console.log('rotating');
    $('.box').toggleClass('rotate');
    let classesList = $('.box');
    Array.from(classesList).forEach(element => {
        element.innerHTML = `<img src="images/questionMark.png" alt="">`
    });
}

