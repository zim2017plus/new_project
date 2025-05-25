let month = 2;
let year = 2022;
let dayInMonth; 

const months31 = [1, 3, 5, 7, 8, 10, 12];
const months30 = [4, 6, 9, 11];

if (months31.includes(month)) {
    console.log("Tháng ${month} năm ${year} có 31 ngày.");
  } else if (months30.includes(month)) {
    console.log(`Tháng ${month} năm ${year} có 30 ngày.`);
  } else if (month === 2) {
    // Kiểm tra năm nhuận
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
      console.log(`Tháng 2 năm ${year} có 29 ngày.`);
    } else {
      console.log(`Tháng 2 năm ${year} có 28 ngày.`);
    }
  }