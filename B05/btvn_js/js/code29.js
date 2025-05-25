let numberOne = 6;
let numberTwo = 3;
let math = "*";

if (math === "+") {
    result = numberOne + numberTwo;
    console.log('${result}');

} else if (math === "-") {
    result = numberOne - numberTwo;
    console.log(`${result}`);
} else if (math === "*") { 
    result = numberOne * numberTwo;
    console.log(`${result}`);
} else if (math === "/") {
    if (numberTwo === 0) {
        console.log("Không thể chia cho 0");
        
    } else {
        result = numberOne / numberTwo;
    console.log(`${result}`);
    }
} else {
        console.log("Không thực hiện được, phép tính không hợp lệ");
        
}
