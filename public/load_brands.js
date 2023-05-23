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
        new brand("A", 0.6, 0.7, 60, "Parking Τομέας Α"),
        new brand("B", 0.6, 0.465, 60, "Parking Τομέας Β"),
        new brand("C", 0.6, 0.25, 60, "Parking Τομέας Γ"),
        new brand("D", 0.32, 0.51, 60, "Parking Τομέας Δ"),
    ],
    [
        new brand("b1", 0.6, 0.2, 60, "Burberry"),
        new brand("b2", 0.28, 0.27, 35, "Apple"),
        new brand("b3", 0.45, 0.31, 45, "Lacoste"),
        new brand("b4", 0.63, 0.3, 50, "Giorgio Armani"),
        new brand("b5", 0.93, 0.27, 35, "Αρτοποιείο Βασίλης Ραυτόπουλος"),
        new brand("b6", 0.9, 0.32, 40, "baskin robbins"),
        new brand("b7", 0.9, 0.39, 40, "Rolex"),
        new brand("b8", 0.9, 0.47, 40, "Rexona"),
        new brand("b9", 0.9, 0.56, 40, "Rodial"),
        new brand("b10", 0.91, 0.64, 60, "Power Health"),
        new brand("b11", 0.9, 0.72, 40, "United Colors of Benetton"),
        new brand("b12", 0.87, 0.77, 40, "Calvin Klein", true),
        new brand("b13", 0.67, 0.75, 40, "Swarovski"),
        new brand("b14", 0.44, 0.735, 40, "Wind"),
        new brand("b15", 0.67, 0.65, 40, "Adidas"),
        new brand("b16", 0.67, 0.7, 40, "Converse"),
        new brand("b17", 0.34, 0.575, 40, "Bottega Ottica"),
        new brand("b18", 0.34, 0.54, 40, "παστέλια Jannis"),
        new brand("b19", 0.34, 0.49, 45, "Cook-Shop"),
        new brand("b20", 0.34, 0.43, 45, "L'OR"),
        new brand("b21", 0.33, 0.38, 50, "La Vie en Rose", true),
        new brand("c0", 0.88, 0.2, 30, "Είσοδος"),
        new brand("c1", 0.58, 0.267, 30, "Διάδρομος Κ1"),
        new brand("c2", 0.58, 0.357, 30, "Διάδρομος Κ2"),
        new brand("c3", 0.58, 0.615, 30, "Διάδρομος Κ3"),
        new brand("c4", 0.58, 0.72, 30, "Διάδρομος Κ4"),
        new brand("c5", 0.79, 0.47, 30, "Διάδρομος Ο1"),
        new brand("c6", 0.45, 0.54, 30, "Διάδρομος Ο2"),
        new brand("c7", 0.343, 0.31, 30, "Διάδρομος Ο3"),
        new brand("c8", 0.51, 0.49, 30, "προαύλιος χώρος"),
    ],
    [
        new brand("b1", 0.42, 0.19, 80, "Reebok"),
        new brand("b2", 0.62, 0.205, 40, "Coco Chanel", true),
        new brand("b3", 0.55, 0.3, 45, "Under Armour", true),
        new brand("b4", 0.7, 0.28, 70, "Dolce & Gabbana"),
        new brand("b5", 0.87, 0.17, 70, "New Balance"),
        new brand("b6", 0.9, 0.27, 70, "Vans"),
        new brand("b7", 0.88, 0.37, 50,"Air Jordan", true),
        new brand("b8", 0.87, 0.44, 70, "Asics"),
        new brand("b9", 0.89, 0.54, 70, "Givenchy"),
        new brand("b10", 0.9, 0.64, 80, "Gucci"),
        new brand("b11", 0.85, 0.72, 70, "Nike"),
        new brand("b12", 0.67, 0.72, 80, "Kappa"),
        new brand("b13", 0.42, 0.71, 70, "Tory Burch"),
        new brand("b14", 0.67, 0.65, 70, "Fila"),
        new brand("b15", 0.33, 0.63, 50, "Valentino", true),
        new brand("b16", 0.33, 0.54, 75, "Levi's"),
        new brand("b17", 0.33, 0.47, 70, "Fendi"),
        new brand("b18", 0.33, 0.41, 50, "Louis Vuitton", true),
        new brand("b19", 0.33, 0.3, 70, "Emilio Guido"),
        new brand("c1", 0.58, 0.247, 30, "Διάδρομος Κ1"),
        new brand("c2", 0.58, 0.357, 30, "Διάδρομος Κ2"),
        new brand("c3", 0.58, 0.615, 30, "Διάδρομος Κ3"),
        new brand("c4", 0.58, 0.72, 30, "Διάδρομος Κ4"),
        new brand("c5", 0.78, 0.5, 30, "Διάδρομος Ο1"),
        new brand("c6", 0.445, 0.56, 30, "Διάδρομος Ο2"),
    ],
    [
        new brand("b1", 0.7, 0.25, 90, "Jumbo"),
        new brand("b2", 0.88, 0.38, 50, "Βιβλοπωλείο Το Δόντι"),
        new brand("b3", 0.88, 0.46, 50, "Antique Gallery"),
        new brand("b4", 0.88, 0.55, 50, "Πατρινό Καρναβάλι"),
        new brand("b5", 0.7, 0.68, 90, "Media Markt"),
        new brand("b6", 0.32, 0.55, 50, "Achaia Clauss"),
        new brand("b7", 0.32, 0.48, 50, "Βιβλιοπωλείο Gotsis"),
        new brand("b8", 0.32, 0.41, 50, "Super Market 3A Αράπης"),
        new brand("c1", 0.58, 0.615, 30, "Διάδρομος Κ1"),
        new brand("c2", 0.78, 0.5, 30, "Διάδρομος Ο1"),
        new brand("c3", 0.445, 0.56, 30, "Διάδρομος Ο2"),
        new brand("c4", 0.3, 0.31, 30, "Διάδρομος Ο3"),
        new brand("c5", 0.3, 0.68, 30, "Διάδρομος Ο4"),
    ],
    [
        new brand("b1", 0.622, 0.19, 60, "Pizza Domino's"),
        new brand("b2", 0.297, 0.335, 40, "Χοιροποίητο"),
        new brand("b3", 0.435, 0.21, 45, "Starbucks"),
        new brand("b4", 0.8, 0.18, 40, "Scalino"),
        new brand("b5", 0.9, 0.2, 60, "noodles & company"),
        new brand("b6", 0.9, 0.3, 60, "Subway"),
        new brand("b7", 0.88, 0.39, 50, "TacoTime"),
        new brand("b8", 0.88, 0.46, 50, "El Pollo Loco"),
        new brand("b9", 0.88, 0.55, 50, "Jack in the Box"),
        new brand("b10", 0.91, 0.666, 60, "Wendy's"),
        new brand("b11", 0.89, 0.73, 50, "Chipotle Mexican Grill"),
        new brand("b12", 0.84, 0.78, 50, "Dairy Queen"),
        new brand("b13", 0.66, 0.74, 55, "Los Pollos Hermanos"),
        new brand("b14", 0.45, 0.74, 40, "McDonald's"),
        new brand("b15", 0.31, 0.66, 40, "Taco Bell"),
        new brand("b16", 0.31, 0.615, 40, "Burger King"),
        new brand("b17", 0.31, 0.54, 40, "Pizza Hut"),
        new brand("b18", 0.31, 0.485, 40, "KFC"),
        new brand("b19", 0.31, 0.42, 50, "Mystic Grill & Bakery"),
        new brand("c1", 0.58, 0.3, 30, "περιοχή Π1"),
        new brand("c2", 0.58, 0.67, 30, "περιοχή Π2"),
        new brand("c3", 0.78, 0.5, 30, "Διάδρομος Ο1"),
        new brand("c4", 0.4, 0.5, 30, "Διάδρομος Ο2"),
    ]
];





function loadAmenities(level) {
    for (let a of amenities) {

        if (a.id === "atm" && level % 2 !== 0) continue;
        if (/^wc/.test(a.id) && level === -1) continue;

        const amenity = document.createElement("img");
        amenity.src = a.src;
        amenity.className = "clickable";
        amenity.id = a.id;
        amenity.addEventListener("click", () => {
            fetch('/floorplan', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: a.id, level: level})
              })
                .then(response => {
                    if (response.ok) window.location.href = response.url;
                })
                .catch(error => {
                  console.error('Error:', error);
            });
        });

        // style
        if (/^left/.test(a.id) && level === -1) amenity.style.right = (a.right-0.04)*100 + 1 + '%';
        else if (/^right/.test(a.id) && level === -1) amenity.style.right = (a.right+0.04)*100 - 1 + '%';
        else amenity.style.right = a.right*100 + '%';

        if (level === -1) amenity.style.top = (a.top-0.05)*100 + '%';
        else amenity.style.top = a.top*100 + '%';


        // add element to DOM
        document.querySelector("#main").appendChild(amenity);
    }
}

function loadMarkers(level) {
    for (let b of brands[level+1]) {
        const marker = document.createElement("img");
        if (level === -1 || b.id.substring(0,1) === "c") {
            marker.src = "images/misc/logo_transparent.png";
        }
        else {
            marker.src = "images/floor/" + level + "/" + b.id.substring(1) + ".png";
        }
        marker.className = "clickable";
        marker.id = b.id;
        let toast;
        marker.addEventListener("click", () => {
            fetch('/floorplan', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: b.id, level: level})
              })
                .then(response => {
                    if (response.ok) window.location.href = response.url;
                })
                .catch(error => {
                  console.error('Error:', error);
            });
        });
        marker.addEventListener("mouseover", () => {
            marker.style.cursor = "pointer";
            toast = Toastify({
                text: b.description,
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


window.addEventListener("resize", () => {

    const currentUrl = window.location.href;
    const indexOfEqualSign = currentUrl.indexOf("=");
    const level = parseInt(currentUrl.substring(indexOfEqualSign + 1));

    const ratio = 1536 / parseInt(window.innerWidth);
    const container_dim = document.querySelector("#main").getBoundingClientRect();

    for (let b of brands[level+1]) {
        const marker = document.querySelector("#" + b.id);
        marker.style.width = b.size / ratio + 'px';
        marker.style.height = b.size / ratio + 'px';
        marker.style.right = container_dim.width*b.right + 'px';
        marker.style.top = container_dim.height*b.top + 'px';
    }

    for (let a of amenities) {
        const amenity = document.querySelector("#" + a.id);
        amenity.style.right = container_dim.width*a.right + 'px';
        amenity.style.top = container_dim.height*a.top + 'px';
    }

});