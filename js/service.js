
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






var para = document.querySelectorAll(".para")
var button = document.querySelectorAll(".arrow_button")
var main = document.querySelectorAll(".sub_button")
var icon = document.querySelectorAll(".icon_img")

for(let i=0; i<main.length ; i++){
    main[i].addEventListener("click",()=>{
        main[i].classList.toggle("active")
        icon[i].classList.toggle("icon-change")
        console.log("babu")
    
        if(button[i].innerHTML=="Read more"){
            button[i].innerHTML="Read less"
       
       }
       else{
           button[i].innerHTML="Read more"
       }
    
    
    
        if(para[i].style.display === 'block'){
            para[i].style.display = 'none'
    
        }else{
            para[i].style.display = 'block'
    
        }
    })

    
}



var para1 = document.querySelectorAll(".para1")
var button1 = document.querySelectorAll(".arrow_button1")
var main1 = document.querySelectorAll(".sub_button1")
var icon1 = document.querySelectorAll(".icon_img1")

for(let i=0; i<main.length ; i++){
    main1[i].addEventListener("click",()=>{
        main1[i].classList.toggle("active")
        icon1[i].classList.toggle("icon-change")
        console.log("babu")
    
        if(button1[i].innerHTML=="Read more"){
            button1[i].innerHTML="Read less"
       
       }
       else{
           button1[i].innerHTML="Read more"
       }
    
    
    
        if(para1[i].style.display === 'block'){
            para1[i].style.display = 'none'
    
        }else{
            para1[i].style.display = 'block'
    
        }
    })

    
}
