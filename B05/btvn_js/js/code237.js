let yourNumber = 157;
let price = 0;

if (yourNumber <= 1) {
    price = 15000;
} else if (yourNumber <= 5) {
    price = 13500;
} else {
    price = 11000;
}

let total = yourNumber * price;

if (yourNumber > 120) {
    total = total * 0.9; 
}

console.log(total + "vnd");
