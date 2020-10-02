let container=document.querySelector(".gal-container");
let number=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
let caption=[
  "Red Flower", "White Nuptial", "Blue Chocolate", "Pink Chocolate", 
  "Noreos Cake", "Soccer", "Plain Beauty", "leaf in Sky", "Blue Chocolate", "Royalty Pink", "Wedding Baggage", "Yellow Love", "Blue Chocky", "Blue Rose", "Buttered Pink", "Fashionista", "Plain Round", "Pink Micky"
]

for (let i=0;i<number.length;i++) {
  let imgCont = document.createElement("DIV");
  imgCont.classList.add("imgCont");

  let figCont = document.createElement("FIGURE");
  figCont.classList.add("figCont");

  let img = document.createElement("IMG");
  img.setAttribute("src", `images/cake/cake${i}.jpg`);
  img.setAttribute("alt", `cake${i}`);
  img.classList.add("gal-piz");

  let figCaption = document.createElement("FIGCAPTION");
  figCaption.classList.add("figCaption");
  let word=document.createTextNode(`${caption[i]}`);

  figCaption.appendChild(word);
  figCont.appendChild(img);
  figCont.appendChild(figCaption);
  imgCont.appendChild(figCont);
  container.appendChild(imgCont);


}