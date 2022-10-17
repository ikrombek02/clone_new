var kley = document.querySelector("#navbar_fix");

addEventListener("scroll", ()=>{
    kley.classList.toggle("kleyed", window.scrollY > 100);
})

let btnCatalog = document.querySelector(".catalog")
let Allcatalog = document.querySelector("#swup");

btnCatalog.addEventListener("click",()=>{
    Allcatalog.classList.toggle("all_catalog");
    btnCatalog.classList.toggle("icons");
})

let menu_btn = document.querySelector(".menu_btn");
let icon_link = document.querySelector(".icon_link");

menu_btn.addEventListener("click",()=>{
    icon_link.classList.toggle("login_category");
    menu_btn.classList.toggle("icons_exit");
})

let as_btn1 = document.querySelector(".as_btn1");
let login_container = document.querySelector(".login_container");

as_btn1.addEventListener("click",()=>{
    login_container.classList.add("act");
})

let opener_closer = document.querySelector(".opener_closer");
opener_closer.addEventListener("click",()=>{
    login_container.classList.remove("act");
})

let shop_btn = document.querySelector(".shop_btn");
let shop_section = document.querySelector(".shop_section");
shop_btn.addEventListener("click",()=>{
  shop_section.classList.add("shop_active");
})

let opener_closer1 = document.querySelector(".opener_closer1");
opener_closer1.addEventListener("click",()=>{
  shop_section.classList.remove("shop_active");
})

// let btn_registration = document.querySelector(".opener_closer");

// menu_btn.addEventListener("click",()=>{
//     icon_link.classList.toggle("login_category");
//     menu_btn.classList.toggle("icons_exit");
// })

function openTab(evt, Services, arrows) {
    var i, tabcontent, tablinks, tabArrow;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tabArrow = document.getElementsByClassName("arrow");
    for (i = 0; i < tabArrow.length; i++) {
      tabArrow[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(arrows).style.display = "block";
    document.getElementById(Services).style.display = "block";
    evt.currentTarget.className += " active";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();