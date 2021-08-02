console.log("******CallBack Hell*****");

const brands = [];

function newBrand(brand, callback) {
  brands.push(brand);
  callback();
}

function showBrand() {
  console.log(brands);
}

function callBackHell() {
  setTimeout(() => {
    newBrand("Germany", showBrand);
    setTimeout(() => {
      newBrand("USA", showBrand);
      setTimeout(() => {
        newBrand("UK", showBrand);
      }, 1000);
    }, 1000);
  }, 1000);
}

callBackHell();
