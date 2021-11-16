"use strict"

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {          //Образец кода с форума
    anchor.addEventListener("click", function (event) {
        event.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


const burger = document.getElementById("burger");
const burgerLine = document.getElementById("click");
const burgerImg = document.getElementById("img");
const burgerMain = document.getElementById("burger-main");
const burgerTown = document.getElementById("burger-town");
const burgerBridge = document.getElementById("burger-bridge");
const burgerForm = document.getElementById("burger-form");
const burgerFooter = document.getElementById("burger-footer");


function burgerFlex() {
    burger.style.display = "flex";
}

function burgerNone() {
    burger.style.display = "none";
}


burgerLine.addEventListener("click", burgerFlex);
burgerImg.addEventListener("click", burgerNone);
burgerMain.addEventListener("click", burgerNone);
burgerTown.addEventListener("click", burgerNone);
burgerBridge.addEventListener("click", burgerNone);
burgerForm.addEventListener("click", burgerNone);
burgerFooter.addEventListener("click", burgerNone);
