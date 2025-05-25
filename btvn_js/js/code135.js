let a = 2; 
let b = 3; 
let x;

if (a === 0) { 
    if (b === 0) {
        console.log("phuong trinh vo so nghiem");
    } else { 
        console.log("phuong trinh vo nghiem");
    }
} else {
    x = -b / a;
    console.log(`phuong trinh co nghiem la ${x}`);
}   