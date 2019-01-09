const show = document.querySelector(".menu-btn");
const list = document.querySelector("#list");
const listItem = document.querySelectorAll("li");
let menu = false;
show.addEventListener("click",function(){
    if(!menu){
        show.classList.add("close");
        list.classList.add("show");
        menu = true;
    }else{
        show.classList.remove("close");
        list.classList.remove("show");
         menu = false;
    }
})
