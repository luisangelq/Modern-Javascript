console.log("************* || Operator or **************");

const cash = 300;
const credit = 400;
const available = cash + credit;
const total = 600;

if (cash >= total || credit >= total || available >= total) {
    console.log("You can pay");
} else {
    console.log("You Cannot Pay");
}