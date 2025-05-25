let x = 2;
let y = 3;
let z = 4;

if (x > 0 && y > 0 && z > 0) {
  if (x + y > z) { 
    if (x === y && y === z) {
      console.log("Tam giác đều");
    } else if (x === y || x === z || y === z) {
      console.log("Tam giác cân");
    } else if (x ** 2 + y ** 2 === z ** 2) {
      console.log("Tam giác vuông");
    } else {
      console.log("Tam giác thường");
    }
  } else {
    console.log("Không phải tam giác");
  }
} else {
  console.log("Độ dài các cạnh phải là số nguyên dương");
}
