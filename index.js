const navSlide=()=>{
  const burger=document.querySelector(".burger");
  const nav=document.querySelector(".navbar");
  const navbar=document.querySelectorAll(".nav-list");

  burger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-active");

    navbar.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation="";
      }
      else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/7 + 1}s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });  
}
navSlide();


let curImg =0;
var captionText= ["This is the best catering service company ever", "how I love cakes", "they are the best"];
let name = ["OluwaYemisi", "OluwaBukunmi", "OluwaShikemi"];

document.querySelector(".innerText").innerHTML=captionText[0];
document.querySelector(".name-text").innerHTML=name[0];
document.querySelector(".prev").addEventListener("click", ()=> {
  processPrevious();
})
document.querySelector(".next").addEventListener("click", ()=>{
  processNext();
})

function processPrevious() {
  newSlide(-1);
}

function processNext() {
  newSlide(1);
}

function newSlide(direction) {
  let imgCt= captionText.length;
  curImg = curImg + direction;

  if (curImg < 0) {
    curImg= imgCt - 1;
  }
  if(curImg === imgCt) {
    curImg = 0;
  }

  document.querySelector(".remarks-img").src = `images/ceo${curImg}.jpg`;
  document.querySelector(".innerText").textContent=captionText[curImg];
  document.querySelector(".name-text").textContent=name[curImg];
}

function autoSlide () {
  setInterval(()=> {
    let imgCt= captionText.length;
    curImg++;

    if (curImg < 0) {
      curImg= imgCt - 1;
    }
    if(curImg === imgCt) {
      curImg = 0;
    }    
    document.querySelector(".remarks-img").src = `images/ceo${curImg}.jpg`;
    document.querySelector(".innerText").textContent=captionText[curImg];
    document.querySelector(".name-text").textContent=name[curImg];

  }, 5000);
};
autoSlide();