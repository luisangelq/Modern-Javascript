console.log("***********Save data in Local Storage***********");

localStorage.setItem("delete", "this is going to disapear");
localStorage.setItem("name", "Luis Angel");

const product = {
    name: "Mouse",
    brand: "Eagle Warrior",
    price: 350
}

const productString = JSON.stringify( product )
localStorage.setItem("product", productString)

const months = ["January", "February", "March"]
localStorage.setItem("months", JSON.stringify(months))
