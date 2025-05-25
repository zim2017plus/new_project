let x = 3;
let y = 4;
let z = 5;

if (x > 0 && y > 0 && z > 0) {
  if (x + y > z && x + z > y && y + z > x) {
    console.log(true);
  } else {
    console.log(false);
  }
} 
