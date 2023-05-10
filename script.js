"use strict";

class marker{
    constructor(id, top, right){
        this.id = id;
        this.top = top;
        this.right = right;
    }
}


const markers = [
    new marker("parking", 0.92, 0.75),
    new marker("ground", 0.87, 0.355),
    new marker("first", 0.75, 0.535),
    new marker("second", 0.65, 0.5),
    new marker("third", 0.55, 0.47)
];



window.addEventListener("DOMContentLoaded", () => {
    // load markers
    if (window.location.href.includes("starting_page.html")) {
        for (let m of markers) {
            const marker = document.createElement("img");
            marker.src = "logo_transparent.png";
            marker.className = "marker";
            marker.id = m.id;
            marker.addEventListener("click", () => {
                window.location.href = m.id + ".html";
            });

            // style 
            marker.style.top = m.top*100 + '%';
            marker.style.right = m.right*100 + '%';
            marker.style.transform = "translate(-50%, -50%)";

            // add element to DOM
            document.querySelector("#main").appendChild(marker);
        }
    }

});

window.addEventListener("resize", () => {

    const ratio = 1536 / parseInt(window.innerWidth);

    // scale header height
    document.querySelector("header").style.height = ratio * 70 + 'px';
    // scale body padding top, so that image is not cut
    document.querySelector("body").style.paddingTop = ratio * 70 + 'px';

    // scale and position markers
    if (window.location.href.includes("starting_page.html")) {
        const container_dim = document.querySelector("#main").getBoundingClientRect();

        for (let m of markers) {
            const marker = document.querySelector("#" + m.id);
            marker.style.width = 70 / ratio + 'px';
            marker.style.height = 70 / ratio + 'px';
            marker.style.right = container_dim.width*m.right + 'px';
            marker.style.top = container_dim.height*m.top + 'px';
        }
    }

});





// ==================================================================================

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

document.querySelector("#facebook").addEventListener('click', () => {
        window.open('https://www.facebook.com/profile.php?id=100091574676795');

    Toastify({
        text: "Facebook page opened in new tab!",
        duration: 2000, //time in ms
        gravity: "bottom",
        style: {
            background: "#3f454f",
            color: "#ff8e4c"
        }
    }).showToast();

});
