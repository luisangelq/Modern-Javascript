const url = "http://localhost:4000";

const getDishes = async () => {
    try {
        const dishes = await fetch(`${url}/dishes`);
        const category = await fetch(`${url}/category`);

        const dataDishes = await dishes.json();
        const dataCategory = await category.json();
        const dataObj = {
            dishes: dataDishes,
            category: dataCategory,
        }
        return dataObj;
    } catch (error) {
        console.log(error);
    }
}

export { getDishes };