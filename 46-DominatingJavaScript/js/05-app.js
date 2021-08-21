console.log("********** Explicit Binding **********");

function person(item1, item2) {
    console.log(`Mi name is ${this.name} and i listen ${item1} and ${item2}`);
}
 
const info = {
    name: "John"
}

const favoriteArtist = ["Eminem", "Drake"];

//call you need to pass the each parameter
person.call(info, favoriteArtist[0], favoriteArtist[1]);

//apply take the hole value and apply it to the function
person.apply(info, favoriteArtist);

//bind create a new function 
const newFn = person.bind(info, favoriteArtist[0], favoriteArtist[1]);
newFn();