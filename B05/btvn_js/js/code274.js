let yourMoney = 42000;

let soTo5000 = Math.floor(yourMoney / 5000);
yourMoney = yourMoney % 5000;

let soTo2000 = Math.floor(yourMoney / 2000);
yourMoney = yourMoney % 2000;

let soTo1000 = Math.floor(yourMoney / 1000);

console.log(`${soTo5000} + ${soTo2000} + ${soTo1000} `);
