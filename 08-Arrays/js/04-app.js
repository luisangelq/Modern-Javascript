console.log("*******************Add new values to an array **********************");

const months2 = ["January", "February", "March", "April", "May", "June"];

months2[0] = "New Month" 

months2[6] = "Last Month"

delete months2[5]
console.table(months2);