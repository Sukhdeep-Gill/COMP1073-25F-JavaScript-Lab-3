const output = document.querySelector('#output');

//CLASS toycar 
class ToyCar {
    // Properties of the car
    brand;
    model;
    color;
    scale;
    price;
    horsepower;
    features;
    // Constructor to initialize a new ToyCar object
    constructor(brand, model, color, scale, price, horsepower, features) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.scale = scale;
        this.price = price;
        this.horsepower = horsepower;
        this.features = features;
    }
// Method to display car details on the page
 displayCar() {
        output.innerHTML = "";

        const desc = document.createElement('p');
        desc.innerHTML =
            `<strong>${this.brand} ${this.model}</strong> (${this.scale}) in ${this.color} — $${this.price}<br>
             <strong>Horsepower:</strong> ${this.horsepower} HP`;
        // Create a heading for features
        const featuresTitle = document.createElement('h3');
        featuresTitle.textContent = "Features:";
        // Create a list of features
        const featureList = document.createElement('ul');
        this.features.forEach(f => {
            let li = document.createElement('li');
            li.textContent = f;
            featureList.appendChild(li);
        });

        output.appendChild(desc);
        output.appendChild(featuresTitle);
        output.appendChild(featureList);
    }

   // Method to update horsepower and refresh display
    updateHP(newHP) {
        this.horsepower = newHP;
        this.displayCar();
    }

    // Method to change price and refresh display
    changePrice(newPrice) {
        this.price = newPrice;
        this.displayCar();
    }

    // Method to add a new feature and refresh display
    addFeature(newFeature) {
        this.features.push(newFeature);
        this.displayCar();
    }


}

//Create the car object with initial properties
let camaro = new ToyCar(
    "Chevrolet",
    "2024 Camaro ZL1 1LE",
    "Candy Copper/Bronze",
    "1/24 Scale",
    20.99,
    650, 
    ["Openable Hood", "Sunroof", "Openable Doors", "Carbon fiber"]
);
// Display initial car details
camaro.displayCar();

//Event listener to update horsepower when button is clicked
document.querySelector("#btnHP").addEventListener("click", () => {
    let newHP = document.querySelector("#newHP").value;
    if (newHP !== "") camaro.updateHP(parseInt(newHP));
});

//Event listener to change price when button is clicked
document.querySelector("#btnPrice").addEventListener("click", () => {
    let newPrice = document.querySelector("#newPrice").value;
    if (newPrice !== "") camaro.changePrice(parseFloat(newPrice));
});

//Event listener to add a new feature when button is clicked
document.querySelector("#btnFeature").addEventListener("click", () => {
    let newFeature = document.querySelector("#newFeature").value;
    if (newFeature !== "") {
        camaro.addFeature(newFeature);
        document.querySelector("#newFeature").value = '';
    }
});