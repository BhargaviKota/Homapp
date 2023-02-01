function navslider(){

  const nav = document.querySelector("nav");
  const menu = document.querySelector(".nav_list");
  const burger= document.querySelector(".burger");
  
  burger.addEventListener("click",()=>{
      menu.classList.toggle("nav-active")
      burger.classList.toggle("toggle")
     

  })

}
navslider();



var swiper = new Swiper(".mySwiper", {
	slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 1
    },

    600: {
      slidesPerView: 2
    },
    700: {
      slidesPerView: 2
    },

    900: {
      slidesPerView:3
    },
    1200: {
      slidesPerView: 4
    }
    ,1500: {
      slidesPerView: 4
    }
  }
  
  });


  var swiper = new Swiper(".newswiper", {
    slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      500: {
        slidesPerView: 1
      },
  
      600: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1
      },
  
      900: {
        slidesPerView: 1
      },
      
    }
    
    });

 