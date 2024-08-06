const openbtn = document.querySelector(".openbtn");
const closebtn = document.querySelector(".closebtn");
const list = document.querySelector(".mobileview")
const details = document.querySelectorAll(".details-h2")
const devicemedia = window.matchMedia('(max-width = 858px)')
// function textSize(){
//   if (devicemedia.matches){
//     details.forEach(detail=>{
//       detail.classList.remove("details-h2")
//       detail.classList.add("details-external")
//     })
//     }
// }
// textSize()


openbtn.addEventListener("click", function(){
 list.classList.add('openIt')
})
closebtn.addEventListener("click", function(){
  list.classList.remove('openIt')
})

