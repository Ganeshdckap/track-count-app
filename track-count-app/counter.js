let add = document.querySelector("#add")
let minus = document.querySelector("#minus")
let reset = document.querySelector("#reset")
let number = document.querySelector("#number")


add.addEventListener("click",()=>{
    number.innerText ++
    if(number.innerText > 0){
    number.style.color ="green"
    }
    if(number.innerText == 0){
      number.style.color = "black"
   }
})
minus.addEventListener("click",()=>{
    number.innerText --
    if(number.innerText < 0){
        number.style.color ="red"

        }
      if(number.innerText == 0){
         number.style.color = "black"
      }
})
reset.addEventListener("click",()=>{
    number.innerText =0
    if(number.innerText == 0){
      number.style.color = "black"
   }
})