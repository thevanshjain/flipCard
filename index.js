var count=0;
var cards=document.querySelectorAll(".card");
var score=document.querySelector(".score");
var start;

var end;
cards.forEach((card) => card.addEventListener("click",flip));
var firstCard;
var secondCard;
var isClicked=false;

function flip() {
    // console.log(this);
   
    // time.innerHTML=start.getSeconds();
    this.classList.add("flip");
    
        if(!isClicked) {
            isClicked=true;
            firstCard=this;
        }
        else {
            secondCard=this;
            
            checkIt();
        }
}


function checkIt() {
    if(firstCard.dataset.image==secondCard.dataset.image)
    {
        success();
    }
    else {
        failed();
    }
}
function success() {
    // console.log(++count);
    score.innerHTML=++count;
    firstCard.removeEventListener("click",flip);
    secondCard.removeEventListener("click",flip);
    if(count===8) {
    end=new Date().getTime();
    setTimeout(()=>{
       end=(end-start)/1000;
       end=Math.round(end); 
    alert(`
    Wow, You just took ${end} seconds.
    Thanks for playing!`);
    reload();

    },1500);
    }
    reset();
}


function failed() {
    setTimeout(() => {

        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
      }, 200);
}

function reset() {
    isClicked = false;
    firstCard = null;
    secondCard = null;
}
function shuffle() {
    start=new Date();
    cards.forEach((card) => {
      var index = Math.floor(Math.random() * 16);
      card.style.order = index;
    });
  }
shuffle();
function reload() {
    location.reload();
}
