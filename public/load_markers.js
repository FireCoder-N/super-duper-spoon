"use strict";

class marker{
    constructor(id, top, right, description){
        this.id = id;
        this.top = top;
        this.right = right;
        this.description = description;
    }
}

const markers = [
    new marker("m-1", 0.92, 0.75, "επίπεδο -1 (parking)"),
    new marker("m0", 0.87, 0.355, "επίπεδο 0 (είσοδος)"),
    new marker("m1", 0.75, 0.535, "επίπεδο 1"),
    new marker("m2", 0.65, 0.5, "επίπεδο 2"),
    new marker("m3", 0.55, 0.47, "επίπεδο 3"),
];


window.addEventListener("DOMContentLoaded", () => {
    // load markers
    for (let m of markers) {
        const marker = document.createElement("img");
        marker.src = "images/misc/logo_transparent.png";
        marker.className = "marker clickable";
        marker.id = m.id;
        let toast;
        marker.addEventListener("click", () => {
            window.location.href = "/floorplan?f=" + m.id.substring(1);
        });
        marker.addEventListener("mouseover", () => {
            marker.style.cursor = "pointer";
            toast = Toastify({
                text: m.description,
                duration: -1,
                gravity: "bottom",
                style: {
                    background: "#3f454f",
                    color: "#ff8e4c"
                }
            }).showToast();
        });
        marker.addEventListener("mouseout", () => {
            toast.hideToast();
        });

        // style 
        marker.style.top = m.top*100 + '%';
        marker.style.right = m.right*100 + '%';
        marker.style.transform = "translate(-50%, -50%)";

        // add element to DOM
        document.querySelector("#main").appendChild(marker);
    }
});

window.addEventListener("resize", () => {

    const ratio = 1536 / parseInt(window.innerWidth);
    const container_dim = document.querySelector("#main").getBoundingClientRect();

    for (let m of markers) {
        const marker = document.querySelector("#" + m.id);
        marker.style.width = 70 / ratio + 'px';
        marker.style.height = 70 / ratio + 'px';
        marker.style.right = container_dim.width*m.right + 'px';
        marker.style.top = container_dim.height*m.top + 'px';
    }

});