function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


window.onscroll = function(){
    scroll();
}

function scroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("header").style.top = "0";
        console.log("oke");
        
    }else{
        document.getElementById("header").style.top = "-60px";
    }
}


$(document).ready(function(){
  $(".navbar_toggle").click(function(){
    $(".responsive_menu").slideToggle();
  });

  $(window).scroll(function() {
    $(".responsive_menu").slideUp();
  });
  $(window).resize(function() {
    $(".responsive_menu").slideUp();
  });
})