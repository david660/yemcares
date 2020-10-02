let inputers= document.querySelectorAll(".contact-inp");
let inputItem = document.querySelectorAll(".input-item");
let labels = document.querySelectorAll(".labels");

for (let i=0; i<inputers.length;i++) {
  inputItem[i].addEventListener("click", ()=>{
      inputItem[i].classList.add("underline");
      labels[i].classList.add("labels-edit");
  })
}