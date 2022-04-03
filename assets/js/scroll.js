const toDo = document.querySelector(".to-top");

window.addEventListener('scroll',()=>{
  
    if(window.pageYOffset > 100){
      toDo.classList.add("active")
    }else{
      toDo.classList.remove("active")
    }
    
})