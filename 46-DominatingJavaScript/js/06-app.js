console.log("****** New Binding ********");

function Car(model, color) {
    this.model = model;
    this.color = color;
}

const car = new Car("Ferrari", "red");
console.log(car);

//Window Binding

window.color = "Blue";
function Color() {
    console.log(color);
}
Color();