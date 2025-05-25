let yourAge = 15;

if (yourAge > 0 && yourAge < 100 && Number.isInteger(yourAge)) {
  if (yourAge >= 15) {
    console.log("Bạn được xem phim Thế giới lập trình");
  } else {
    console.log("Bạn KHÔNG được xem phim Thế giới lập trình");
  }
} else {
  console.log("Tuổi không hợp lệ. Vui lòng nhập số nguyên dương nhỏ hơn 100.");
}
