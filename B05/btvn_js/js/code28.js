let totalSale = 90;
let percent = 0; 
if (totalSale <=100) {
    percent = totalSale * 0.05
} else if (totalSale <=300) {
    percent = totalSale * 0.1
}
else {
    percent = totalSale * 0.2
}

console.log("Hoa hong: " + percent);


