let age = 51;

if (age > 0 && age <= 120) {
    if (age <= 11) {
        console.log("Thiếu nhi");
    } else if (age > 11 && age <= 25) {
        console.log("Thiếu niên");
    } else if (age > 25 && age <= 50) {
        console.log("Trung niên");
    } else {
        console.log("Lão niên");
    }
} 
