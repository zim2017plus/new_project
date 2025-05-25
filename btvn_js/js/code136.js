let a = 1;
let b = 2;
let c = 1;

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Phuong trinh vo so nghiem");
        } else {
            console.log("Phuong trinh vo nghiem");
        }
    } else {
        let x = -c / b;
        console.log("Phuong trinh co nghiem duy nhat: " + x);
    }
} else {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("Phuong trinh vo nghiem");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log(`Phuong trinh co nghiem kep: x1 = x2 = + ${x}`);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log("Nghiem thu nhat x1 = " + x1);
        console.log("Nghiem thu hai x2 = " + x2);
    }
}
