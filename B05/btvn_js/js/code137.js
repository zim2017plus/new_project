let yourNumber = 38;
let total = 0;

if (yourNumber <= 50) {
    total = yourNumber * 2000;
    console.log(`${yourNumber} x 2000 = ${total}đ`);

} else if (yourNumber <= 100) {
    total = 50 * 2000 + (yourNumber - 50) * 2500;
    console.log(`50 x 2000 + ${yourNumber - 50} x 2500 = ${total}đ`);

} else if (yourNumber <= 200) {
    total = 50 * 2000 + 50 * 2500 + (yourNumber - 100) * 3000;
    console.log(`50 x 2000 + 50 x 2500 + ${yourNumber - 100} x 3000 = ${total}đ`);

} else if (yourNumber <= 300) {
    total = 50 * 2000 + 50 * 2500 + 100 * 3000 + (yourNumber - 200) * 4000;
    console.log(`50 x 2000 + 50 x 2500 + 100 x 3000 + ${yourNumber - 200} x 4000 = ${total}đ`);

} else {
    total = 50 * 2000 + 50 * 2500 + 100 * 3000 + 100 * 4000 + (yourNumber - 300) * 5000;
    console.log(`50 x 2000 + 50 x 2500 + 100 x 3000 + 100 x 4000 + ${yourNumber - 300} x 5000 = ${total}đ`);
}
