"use strict"

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

function burgerMainNone() {
    burger.style.display = "none";
}

function burgerTownNone() {
    burger.style.display = "none";
}

function burgerBridgeNone() {
    burger.style.display = "none";
}

function burgerFormNone() {
    burger.style.display = "none";
}

function burgerFooterNone() {
    burger.style.display = "none";
}


burgerLine.addEventListener("click", burgerFlex);
burgerImg.addEventListener("click", burgerNone);
burgerMain.addEventListener("click", burgerMainNone);
burgerTown.addEventListener("click", burgerTownNone);
burgerBridge.addEventListener("click", burgerBridgeNone);
burgerForm.addEventListener("click", burgerFormNone);
burgerFooter.addEventListener("click", burgerFooterNone);
