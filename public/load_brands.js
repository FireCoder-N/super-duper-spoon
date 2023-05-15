"use-strict";

class brand {
    constructor(id, top, right, size, description, border=false) {
        this.id = id;
        this.top = top;
        this.right = right;
        this.size = size;
        this.description = description;
        this.border = border;
    }
}

class amenity{
    constructor(id, top, right, src) {
        this.id = id;
        this.top = top;
        this.right = right;
        this.src = src;
    }
}

const amenities = [
    new amenity("right_stair", 0.26, 0.21, "images/amenities/stairs.png"),
    new amenity("left_stair", 0.26, 0.75, "images/amenities/stairs.png"),
    new amenity("right_elevator", 0.26, 0.185, "images/amenities/lift.png"),
    new amenity("left_elevator", 0.26, 0.775, "images/amenities/lift.png"),
    new amenity("wc_up", 0.26, 0.367, "images/amenities/wc.png"),
    new amenity("wc_down", 0.95, 0.625, "images/amenities/wc.png"),
    new amenity("atm", 0.26, 0.6, "images/amenities/atm.png"),
];

const brands = [
    [
        new brand("1", 0.6, 0.2, 60, "Burberry"),
        new brand("2", 0.28, 0.27, 35, "Apple"),
        new brand("3", 0.45, 0.31, 45, "Lacoste"),
        new brand("4", 0.63, 0.3, 50, "Giorgio Armani"),
        new brand("5", 0.93, 0.27, 35, "Αρτοποιείο Βασίλης Ραυτόπουλος"),
        new brand("6", 0.9, 0.32, 40, "baskin robbins"),
        new brand("7", 0.9, 0.39, 40, "Rolex"),
        new brand("8", 0.9, 0.47, 40, "Rexona"),
        new brand("9", 0.9, 0.56, 40, "Rodial"),
        new brand("10", 0.91, 0.64, 60, "Power Health"),
        new brand("11", 0.9, 0.72, 40, "United Colors of Benetton"),
        new brand("12", 0.87, 0.77, 40, "Calvin Klein", true),
        new brand("13", 0.67, 0.75, 40, "Swarovski"),
        new brand("14", 0.44, 0.735, 40, "Wind"),
        new brand("15", 0.67, 0.65, 40, "Adidas"),
        new brand("16", 0.67, 0.7, 40, "Converse"),
        new brand("17", 0.34, 0.575, 40, "Bottega Ottica"),
        new brand("18", 0.34, 0.54, 40, "παστέλι Jannis"),
        new brand("19", 0.34, 0.49, 45, "Cook-Shop"),
        new brand("20", 0.34, 0.43, 45, "L'OR"),
        new brand("21", 0.33, 0.38, 50, "La Vie en Rose", true)
    ],
    [
        new brand("1", 0.42, 0.19, 80, "Reebok"),
        new brand("2", 0.62, 0.205, 40, "Coco Chanel", true),
        new brand("3", 0.55, 0.3, 45, "Under Armour", true),
        new brand("4", 0.7, 0.28, 70, "Dolce & Gabbana"),
        new brand("5", 0.87, 0.17, 70, "New Balance"),
        new brand("6", 0.9, 0.27, 70, "Vans"),
        new brand("7", 0.88, 0.37, 50,"Air Jordan", true),
        new brand("8", 0.87, 0.44, 70, "Asics"),
        new brand("9", 0.89, 0.54, 70, "Givenchy"),
        new brand("10", 0.9, 0.64, 80, "Gucci"),
        new brand("11", 0.85, 0.72, 70, "Nike"),
        new brand("12", 0.67, 0.72, 80, "Kappa"),
        new brand("13", 0.42, 0.71, 70, "Tory Burch"),
        new brand("14", 0.67, 0.65, 70, "Fila"),
        new brand("15", 0.33, 0.63, 50, "Valentino", true),
        new brand("16", 0.33, 0.54, 75, "Levi's"),
        new brand("17", 0.33, 0.47, 70, "Fendi"),
        new brand("18", 0.33, 0.41, 50, "Louis Vuitton", true),
        new brand("19", 0.33, 0.3, 70, "Emilio Guido"),
    ],
    [
        new brand("1", 0.7, 0.25, 90, "Jumbo"),
        new brand("2", 0.88, 0.38, 50, "Βιβλοπωλείο Το Δόντι"),
        new brand("3", 0.88, 0.46, 50, "Antique Gallery"),
        new brand("4", 0.88, 0.55, 50, "Πατρινό Καρναβάλι"),
        new brand("5", 0.7, 0.68, 90, "Media Markt"),
        new brand("6", 0.32, 0.55, 50, "Achaia Clauss"),
        new brand("7", 0.32, 0.48, 50, "Βιβλιοπωλείο Gotsis"),
        new brand("8", 0.32, 0.41, 50, "Super Market 3A Αράπης"),
    ],
    [
        new brand("1", 0.622, 0.19, 60, "Pizza Domino's"),
        new brand("2", 0.297, 0.335, 40, "Χοιροποίητο"),
        new brand("3", 0.435, 0.21, 45, "Starbucks"),
        new brand("4", 0.8, 0.18, 40, "Scalino"),
        new brand("5", 0.9, 0.2, 60, "noodles & company"),
        new brand("6", 0.9, 0.3, 60, "Subway"),
        new brand("7", 0.88, 0.39, 50, "TacoTime"),
        new brand("8", 0.88, 0.46, 50, "El Pollo Loco"),
        new brand("9", 0.88, 0.55, 50, "Jack in the Box"),
        new brand("10", 0.91, 0.666, 60, "Wendy's"),
        new brand("11", 0.89, 0.73, 50, "Chipotle Mexican Grill"),
        new brand("12", 0.84, 0.78, 50, "Dairy Queen"),
        new brand("13", 0.66, 0.74, 55, "Los Pollos Hermanos"),
        new brand("14", 0.45, 0.74, 40, "McDonald's"),
        new brand("15", 0.31, 0.66, 40, "Taco Bell"),
        new brand("16", 0.31, 0.615, 40, "Burger King"),
        new brand("17", 0.31, 0.54, 40, "Pizza Hut"),
        new brand("18", 0.31, 0.485, 40, "KFC"),
        new brand("19", 0.31, 0.42, 50, "Mystic Grill & Bakery"),
    ]
];





function loadAmenities(level) {
    for (let a of amenities) {

        if (a.id === "atm" && level % 2 !== 0) continue;

        const amenity = document.createElement("img");
        amenity.src = a.src;
        amenity.className = "clickable";
        amenity.id = a.id;
        amenity.addEventListener("click", () => {

        });

        // style
        amenity.style.top = a.top*100 + '%';
        amenity.style.right = a.right*100 + '%';

        // add element to DOM
        document.querySelector("#main").appendChild(amenity);
    }
}

function loadMarkers(level) {
    if (level === -1){
        return;
        // loadAmenities(level);
    }
    else {
        for (let b of brands[level]) {
            const marker = document.createElement("img");
            marker.src = "images/floor/" + level + "/" + b.id + ".png";
            marker.className = "clickable";
            marker.id = b.id;
            let toast;
            marker.addEventListener("click", () => {
                console.log(b.id);
                // window.location.href = b.id + ".html";
            });
            marker.addEventListener("mouseover", () => {
                toast = Toastify({
                    text: b.description,
                    duration: 100000,
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
            marker.style.top = b.top*100 + '%';
            marker.style.right = b.right*100 + '%';
            marker.style.width = b.size + 'px';
            marker.style.height = b.size + 'px';

            if (b.border){
                marker.style.borderStyle = "solid";
                marker.style.borderColor = "black";
                marker.style.borderWidth = "1px";
            }

            // add element to DOM
            document.querySelector("#main").appendChild(marker);
        }

        loadAmenities(level);
    }
}


function resizeMarkers(level, ratio){
    const container_dim = document.querySelector("#main").getBoundingClientRect();

    for (let b of brands[level]) {
        const marker = document.querySelector("#" + b.id);
        marker.style.width = b.size / ratio + 'px';
        marker.style.height = b.size / ratio + 'px';
        marker.style.right = container_dim.width*b.right + 'px';
        marker.style.top = container_dim.height*b.top + 'px';
    }
}