console.log("***********Delete and Update data in Local Storage***********");

//Delete one value
localStorage.removeItem("delete")

//Update track
const monthsArray = JSON.parse( localStorage.getItem("months"));
monthsArray.push("New Month")
localStorage.setItem("months", JSON.stringify(monthsArray))

//Delete all records
// localStorage.clear()