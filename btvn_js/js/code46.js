let totalLine = 50;
let timeDoing = 4;

let salary = timeDoing * 20;
let money = 0;

if (totalLine < 10) {
    money = 1;
} else if (totalLine <= 20) {
    money = 2;
} else {
    money = 5;
}

let totalSalary = salary - money;

console.log("Salary: " + totalSalary + "$");
