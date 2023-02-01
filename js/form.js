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



  
var para1 = document.querySelectorAll(".para1")
var button1 = document.querySelectorAll(".arrow_button1")
var main1 = document.querySelectorAll(".sub_button1")
var icon1 = document.querySelectorAll(".icon_img1")

for(let i=0; i<main1.length ; i++){
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




let uname = document.querySelector(".u-name");
let phone = document.querySelector(".u-mobile");
// let email = document.querySelector(".u-email");
// let textarea=document.querySelector('textarea')
let input = document.querySelectorAll("input[type='text']");
let send = document.querySelector(".submit-btn");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("focus", (e) => {
    e.preventDefault();
    console.log("babu")
    const nameValue = uname.value.trim();
    // const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    // const textareaValue=textarea.value.trim();
    // name validation
    let isMatch = /[a-zA-z]{2,}/;
    if (nameValue.match(isMatch)) {
      e.preventDefault();
      uname.style.cssText = "border-bottom:2px solid green";
    } else {
      e.preventDefault();
      uname.style.cssText = "border-bottom:2px solid red";
      uname.focus();
      return false;
    }
    ///----- Phone Validation

    let numMatch = /[0-9]{10}/;

    if (phoneValue.match(numMatch)) {
      e.preventDefault();
      phone.style.cssText = "border-bottom:2px solid green";
    } else {
      phone.style.cssText = "border-bottom:2px solid red";
      phone.focus();
      return flase;
    }

    /////----- Email Validation

    // let isValid = /[a-zA-Z0-9.]{1,}@[a-zA-z]{1,}[.]{1}[a-zA-Z]{2,3}$/;

    // if (emailValue.match(isValid)) {
    //   e.preventDefault();
    //   email.style.cssText = "border-bottom:2px solid green";
    // } else {
    //   email.style.cssText = "border-bottom:2px solid red";
    //     email.focus();
    //     return flase
    // }

    // textare match
    // let text= /[a-zA-z0-9]{1,}/
    // if(textareaValue.match(text)){
    //   e.preventDefault();
    //   textarea.focus()
    // }else{
    //   return false
    // }
  });
  // document.querySelector(".u-form").reset();
}



			const scriptURL = 'https://script.google.com/macros/s/AKfycbxRdMXJ-f3M7Nh-ldeOjvnZ_6wxbsBVdCebXs0QTZ7sIaUT91sDsWTI_zEmI-O_G1WY/exec'
			const form = document.forms['homappForm']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
        .then(document.querySelector(".form").reset())
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})






  