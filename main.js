document.querySelector(".search-icon").onclick = function(){
    document.querySelector(".nav-search").classList.add("open")
}
document.querySelector(".close").onclick = function(){
    document.querySelector(".nav-search").classList.remove("open")
}
document.querySelector(".user-icon").onclick = function(){
    document.querySelector(".nav-user").classList.add("open-user")
}
document.querySelector(".close-user").onclick = function(){
    document.querySelector(".nav-user").classList.remove("open-user")
}


document.querySelector(".Password").onkeyup = function(){
    if(document.querySelector(".Password").value.length<=5){
        document.querySelector(".Password").style.backgroundColor="red"
    }else{
        document.querySelector(".Password").style.backgroundColor="white"

    }
};
// home swiper

const swiper = new Swiper('.home-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const swiperr = new Swiper('.testionails-flex   ', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  document.querySelector(".moon").onclick = function(){
    document.querySelector("body").classList.add("dark");
    document.querySelector(".moon").style.display = 'none'
    document.querySelector(".sun").style.display = 'block'
}

document.querySelector(".sun").onclick = function(){
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".moon").style.display = 'block'
    document.querySelector(".sun").style.display = 'none'
}


