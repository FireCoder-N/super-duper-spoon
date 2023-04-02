"use strict";


window.addEventListener("resize", () => {
    const ratio = 1536 / parseInt(window.innerWidth);
    // document.querySelector("#Brand").style.fontSize = (28 * ratio) + 'px';
    document.querySelector("header").style.height = ratio * 60 + 'px';
    document.querySelector("header").style.lineHeight = 1.5 + "em";
});

document.querySelector("#phone").addEventListener('click', () => {
    const phone = "+30-210-1234567";
    navigator.clipboard.writeText(phone);

    Toastify({
        text: "Phone copied to clipboard!",
        duration: 2000, //time in ms
        gravity: "bottom",
        style: {
            background: "#3f454f",
            color: "#ff8e4c"
        }
    }).showToast();

});


document.querySelector("#email").addEventListener('click', () => {
    const email = "thehall.sthena@gmail.com";
    navigator.clipboard.writeText(email);

    Toastify({
        text: "Email copied to clipboard!",
        duration: 2000, //time in ms
        gravity: "bottom",
        style: {
            background: "#3f454f",
            color: "#ff8e4c"
        }
    }).showToast();

});