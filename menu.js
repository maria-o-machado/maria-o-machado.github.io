
let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu-container");
let dash = document.querySelector(".burger");

let links = document.querySelectorAll(".nav-link");

burger.addEventListener("click", function() {
    burger.classList.toggle("activebrgr");

    if(menu.classList.contains("activemenu")){
        menu.classList.remove("activemenu");
        menu.classList.add("deactivatemenu");
    }
    else {
        menu.classList.add("activemenu");
        menu.classList.remove("deactivatemenu");
    }
});


links[3].addEventListener("click", function() {
    if(menu_contact.classList.contains("activemenu")){
        menu_contact.classList.remove("activemenu");
        menu_contact.classList.add("deactivatemenu");
    }
    burger.classList.toggle("activebrgr");
    menu.classList.remove("activemenu");
    menu.classList.add("deactivatemenu");
});

links[4].addEventListener("click", function() {
    if(menu_contact.classList.contains("activemenu")){
        menu_contact.classList.remove("activemenu");
        menu_contact.classList.add("deactivatemenu");
    }
    burger.classList.toggle("activebrgr");
    menu.classList.remove("activemenu");
    menu.classList.add("deactivatemenu");
});


links[5].addEventListener("click", function() {
    if(menu_contact.classList.contains("activemenu")){
        menu_contact.classList.remove("activemenu");
        menu_contact.classList.add("deactivatemenu");
    }
    burger.classList.toggle("activebrgr");
    menu.classList.remove("activemenu");
    menu.classList.add("deactivatemenu");
});

let image_link = document.querySelector(".image-link");
let menu_contact = document.querySelector(".contact-container");
image_link.addEventListener("click", function() {
    if(menu_contact.classList.contains("activemenu")){
        menu_contact.classList.remove("activemenu");
        menu_contact.classList.add("deactivatemenu");
    }
    else {
        menu_contact.classList.add("activemenu");
        menu_contact.classList.remove("deactivatemenu");
    }
});