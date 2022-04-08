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

//Scroll header
window.onscroll = function(){
    scroll();
}

function scroll() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("header").style.top = "0";
        
    }else{
        document.getElementById("header").style.top = "-60px";
    }
}
// End scroll header

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
//Events.html
const btnSeeAll = document.querySelectorAll('.btn-click');
btnSeeAll.forEach(function(e) {
    e.addEventListener("click",()=>{
      alert("Hiện tại trang web chúng tôi chưa cập nhật thông tin mới. Xin vui lòng quay lại sau !");
    })
});

// Share btn
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
//Header btn Handle 
var liNodes = document.querySelectorAll('.list_menu li a')
// console.log(liNodes);
liNodes.forEach(function(e){
  e.addEventListener("click",()=>{
    alert("Hiện tại trang header đang cập nhật thêm thông tin , các bạn có thể theo dõi thêm thông tin trên thanh (NAV)");
  })
})
function init() {
  const pinterestImg = document.querySelector(".pinterest-img");
  pinterestImg.style.maxHeight = "500px";

  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi everyone, please check this out: ");
  let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

 
}

init();


