// window resize
window.addEventListener("resize", () => {

    const ratio = 1536 / parseInt(window.innerWidth);

    // scale header height
    document.querySelector("header").style.height = ratio * 70 + 'px';
    // scale body padding top, so that image is not cut
    document.querySelector("body").style.paddingTop = ratio * 70 + 'px';
});



// Toastify
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
