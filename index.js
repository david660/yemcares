const navSlide=()=>{
  const burger=document.querySelector(".burger");
  const nav=document.querySelector(".navbar");
  const navbar=document.querySelectorAll(".nav-list");

  burger.addEventListener("click", ()=>{
    nav.classList.toggle("displayer");
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
var captionText= ["I can't appreciate your kind gesture despite the fact that we haven't met. You are indeed a blessing. I have been looking for someone with a good heart and you have proven it", "Your class is the best catering online class I've joined.It has really helped me. My man loves his woman to have a basic knowledge of baking because he likes junks. No more buying nonsense junks. Thank you so much", "Thank you for all you do. Due to my work, I barely have enough time for my phone, and so, I don't attend the class whenever it's going on, But I really locked myself in to take previews. it has been really educative. I'm going to be trying my own and sending them soon."];
let name = ["OluwaYemisi", "OluwaBukunmi", "OluwaShikemi"];

document.querySelector(".innerText").innerHTML=captionText[0];
document.querySelector(".name-text").innerHTML=name[0];
document.querySelector(".prev").addEventListener("click", ()=> {
  processPrevious();
});
document.querySelector(".next").addEventListener("click", ()=>{
  processNext();
});

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

  }, 7000);
};
autoSlide();

function openNewTab(url) {
  let win=window.location.replace(url);
  win.focus;
}
let newLink=document.querySelector(".arti-btn");
newLink.addEventListener("click", ()=>{
  openNewTab("recipee.html");
});

