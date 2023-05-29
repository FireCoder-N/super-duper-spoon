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
    constructor(id, top, right, description, type, src) {
        this.id = id;
        this.top = top;
        this.right = right;
        this.description = description;
        this.type = type;
        this.src = src;
    }
}

const amenities = [
    new amenity("es1", 0.26, 0.21, "Κυλιόμενες Σκάλες Δεξιά", 2, "images/amenities/stairs.png"),
    new amenity("es2", 0.26, 0.75, "Κυλιόμενες Σκάλες Αριστερά", 2, "images/amenities/stairs.png"),
    new amenity("el1", 0.26, 0.185, "Ανελκυστήρας δεξιά", 1, "images/amenities/lift.png"),
    new amenity("el2", 0.26, 0.775, "Ανελκυστήρας αριστερά", 1, "images/amenities/lift.png"),
    new amenity("wc1", 0.26, 0.367, "Τουαλέτες 1", 4, "images/amenities/wc.png"),
    new amenity("wc2", 0.95, 0.625, "Τουαλέτες 2", 4,"images/amenities/wc.png"),
    new amenity("at", 0.26, 0.6, "Μηχάνημα Αυτόματης Ανάληψης", 3, "images/amenities/atm.png"),
];

const brands = [
    [
        new brand("bc1p", 0.6, 0.7, 60, "Parking Τομέας Α"),
        new brand("bc2p", 0.6, 0.465, 60, "Parking Τομέας Β"),
        new brand("bc3p", 0.6, 0.25, 60, "Parking Τομέας Γ"),
        new brand("bc4p", 0.32, 0.51, 60, "Parking Τομέας Δ"),
    ],
    [
        new brand("b01a", 0.6, 0.2, 60, "Burberry"),
        new brand("b02a", 0.28, 0.27, 35, "Apple"),
        new brand("b03a", 0.45, 0.31, 45, "Lacoste"),
        new brand("b04a", 0.63, 0.3, 50, "Giorgio Armani"),
        new brand("b05a", 0.93, 0.27, 35, "Αρτοποιείο Βασίλης Ραυτόπουλος"),
        new brand("b06a", 0.9, 0.32, 40, "baskin robbins"),
        new brand("b07a", 0.9, 0.39, 40, "Rolex"),
        new brand("b08a", 0.9, 0.47, 40, "Rexona"),
        new brand("b09a", 0.9, 0.56, 40, "Rodial"),
        new brand("b10a", 0.91, 0.64, 60, "Power Health"),
        new brand("b11a", 0.9, 0.72, 40, "United Colors of Benetton"),
        new brand("b12a", 0.87, 0.77, 40, "Calvin Klein", true),
        new brand("b13a", 0.67, 0.75, 40, "Swarovski"),
        new brand("b14a", 0.44, 0.735, 40, "Wind"),
        new brand("b15a", 0.67, 0.65, 40, "Adidas"),
        new brand("b16a", 0.67, 0.7, 40, "Converse"),
        new brand("b17a", 0.34, 0.575, 40, "Bottega Ottica"),
        new brand("b18a", 0.34, 0.54, 40, "παστέλια Jannis"),
        new brand("b19a", 0.34, 0.49, 45, "Cook-Shop"),
        new brand("b20a", 0.34, 0.43, 45, "L'OR"),
        new brand("b21a", 0.33, 0.38, 50, "La Vie en Rose", true),
        new brand("bc0a", 0.88, 0.2, 30, "Είσοδος"),
        new brand("bc1a", 0.58, 0.267, 30, "Διάδρομος 1"),
        new brand("bc2a", 0.58, 0.357, 30, "Διάδρομος 2"),
        new brand("bc3a", 0.58, 0.615, 30, "Διάδρομος 3"),
        new brand("bc4a", 0.58, 0.72, 30, "Διάδρομος 4"),
        new brand("bc5a", 0.79, 0.47, 30, "Διάδρομος 5"),
        new brand("bc6a", 0.45, 0.54, 30, "Διάδρομος 6"),
        new brand("bc7a", 0.343, 0.31, 30, "Διάδρομος 7"),
    ],
    [
        new brand("b01b", 0.42, 0.19, 80, "Reebok"),
        new brand("b02b", 0.62, 0.205, 40, "Coco Chanel", true),
        new brand("b03b", 0.55, 0.3, 45, "Under Armour", true),
        new brand("b04b", 0.7, 0.28, 70, "Dolce & Gabbana"),
        new brand("b05b", 0.87, 0.17, 70, "New Balance"),
        new brand("b06b", 0.9, 0.27, 70, "Vans"),
        new brand("b07b", 0.88, 0.37, 50,"Air Jordan", true),
        new brand("b08b", 0.87, 0.44, 70, "Asics"),
        new brand("b09b", 0.89, 0.54, 70, "Givenchy"),
        new brand("b10b", 0.9, 0.64, 80, "Gucci"),
        new brand("b11b", 0.85, 0.72, 70, "Nike"),
        new brand("b12b", 0.67, 0.72, 80, "Kappa"),
        new brand("b13b", 0.42, 0.71, 70, "Tory Burch"),
        new brand("b14b", 0.67, 0.65, 70, "Fila"),
        new brand("b15b", 0.33, 0.63, 50, "Valentino", true),
        new brand("b16b", 0.33, 0.54, 75, "Levi's"),
        new brand("b17b", 0.33, 0.47, 70, "Fendi"),
        new brand("b18b", 0.33, 0.41, 50, "Louis Vuitton", true),
        new brand("b19b", 0.33, 0.3, 70, "Emilio Guido"),
        new brand("bc1b", 0.58, 0.247, 30, "Διάδρομος 1"),
        new brand("bc2b", 0.58, 0.357, 30, "Διάδρομος 2"),
        new brand("bc3b", 0.58, 0.615, 30, "Διάδρομος 3"),
        new brand("bc4b", 0.58, 0.72, 30, "Διάδρομος 4"),
        new brand("bc5b", 0.78, 0.5, 30, "Διάδρομος 5"),
        new brand("bc6b", 0.445, 0.56, 30, "Διάδρομος 6"),
    ],
    [   
        new brand("b01c", 0.67, 0.22, 90, "Jumbo"),
        new brand("b02c", 0.88, 0.37, 50, "Βιβλοπωλείο Το Δόντι"),
        new brand("b03c", 0.88, 0.45, 50, "Antique Gallery"),
        new brand("b04c", 0.88, 0.54, 50, "Πατρινό Καρναβάλι"),
        new brand("b05c", 0.67, 0.69, 90, "Media Markt"),
        new brand("b06c", 0.33, 0.55, 50, "Achaia Clauss"),
        new brand("b07c", 0.33, 0.475, 50, "Βιβλιοπωλείο Gotsis"),
        new brand("b08c", 0.33, 0.4, 50, "Super Market 3A Αράπης"),
        new brand("bc1c", 0.57, 0.615, 30, "Διάδρομος 1"),
        new brand("bc2c", 0.77, 0.5, 30, "Διάδρομος 2"),
        new brand("bc3c", 0.435, 0.53, 30, "Διάδρομος 3"),
        new brand("bc4c", 0.3, 0.31, 30, "Διάδρομος 4"),
        new brand("bc5c", 0.3, 0.68, 30, "Διάδρομος 5"),
    ],
    [
        new brand("b01d", 0.622, 0.19, 60, "Pizza Domino's"),
        new brand("b02d", 0.297, 0.335, 40, "Χοιροποίητο"),
        new brand("b03d", 0.435, 0.21, 45, "Starbucks"),
        new brand("b04d", 0.8, 0.18, 40, "Scalino"),
        new brand("b05d", 0.9, 0.2, 60, "noodles & company"),
        new brand("b06d", 0.9, 0.3, 60, "Subway"),
        new brand("b07d", 0.88, 0.39, 50, "TacoTime"),
        new brand("b08d", 0.88, 0.46, 50, "El Pollo Loco"),
        new brand("b09d", 0.88, 0.55, 50, "Jack in the Box"),
        new brand("b10d", 0.91, 0.666, 60, "Wendy's"),
        new brand("b11d", 0.89, 0.73, 50, "Chipotle Mexican Grill"),
        new brand("b12d", 0.84, 0.78, 50, "Dairy Queen"),
        new brand("b13d", 0.66, 0.74, 55, "Los Pollos Hermanos"),
        new brand("b14d", 0.45, 0.74, 40, "McDonald's"),
        new brand("b15d", 0.31, 0.66, 40, "Taco Bell"),
        new brand("b16d", 0.31, 0.615, 40, "Burger King"),
        new brand("b17d", 0.31, 0.54, 40, "Pizza Hut"),
        new brand("b18d", 0.31, 0.485, 40, "KFC"),
        new brand("b19d", 0.31, 0.42, 50, "Mystic Grill & Bakery"),
        new brand("bc1d", 0.58, 0.3, 30, "Περιοχή Εστίασης 1"),
        new brand("bc2d", 0.58, 0.67, 30, "Περιοχή Εστίασης 2"),
        new brand("bc3d", 0.78, 0.5, 30, "Διάδρομος 1"),
        new brand("bc4d", 0.4, 0.5, 30, "Διάδρομος 2"),
    ]
];

const floorsaplha = ['a', 'b', 'c', 'd'];



function loadAmenities(level) {
    for (let a of amenities) {

        if (a.id === "at" && level % 2 !== 0) continue;
        if (/^wc/.test(a.id) && level === -1) continue;

        const amenity = document.createElement("img");
        amenity.src = a.src;
        amenity.className = "clickable";
        amenity.id = a.id;
        if (/^wc/.test(a.id) || /^es/.test(a.id) || /^at/.test(a.id)){
            amenity.id += floorsaplha[level];
        }
        let toast1;
        amenity.addEventListener("click", () => {
            fetch('/floorplan', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: a.id, level: level, type: a.type})
              })
                .then(response => {
                    if (response.ok) window.location.href = response.url;
                })
                .catch(error => {
                  console.error('Error:', error);
            });
        });
        amenity.addEventListener("mouseover", () => {
            amenity.style.cursor = "pointer";
            toast1 = Toastify({
                text: a.description,
                duration: -1,
                gravity: "bottom",
                style: {
                    background: "#3f454f",
                    color: "#ff8e4c"
                }
            }).showToast();
        });
        amenity.addEventListener("mouseout", () => {
            toast1.hideToast();
        });

        // style
        if (/1/.test(a.id) && level === -1) amenity.style.right = (a.right+0.025)*100 + 1 + '%';
        else if (/2/.test(a.id) && level === -1) amenity.style.right = (a.right-0.025)*100 - 1 + '%';
        else amenity.style.right = a.right*100 + '%';

        if (level === -1) amenity.style.top = (a.top-0.05)*100 + '%';
        else amenity.style.top = a.top*100 + '%';

        amenity.style.transform = "translate(-50%, -50%)";

        // add element to DOM
        document.querySelector("#main").appendChild(amenity);
    }
}

function loadMarkers(level) {
    for (let b of brands[level+1]) {
        const marker = document.createElement("img");
        let type;
        if (level === -1 || b.id.substring(0,2) === "bc") {
            marker.src = "images/misc/logo_transparent.png";
            type = 5;
        }
        else {
            marker.src = "images/floor/" + level + "/" + b.id.slice(1,-1) + ".png";
            type = 0;
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
                body: JSON.stringify({id: b.id, level: level, type: type})
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
        marker.style.maxWidth = b.size + 'px';
        marker.style.maxHeight = b.size + 'px';
        marker.style.transform = "translate(-50%, -50%)";

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
        
        marker.style.right = b.right * 100 + '%';
        marker.style.top = b.top * 100 + '%';
        marker.style.width = b.size / ratio + 'px';
        marker.style.height = b.size / ratio + 'px';
    }

    // for (let a of amenities) {
    //     const amenity = document.querySelector("#" + a.id);
    //     amenity.style.right = container_dim.width*a.right + 'px';
    //     amenity.style.top = container_dim.height*a.top + 'px';
    // }

});