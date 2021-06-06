console.log("*************replace, slice, substring, charAt**************");

const example = "I'm going to play "

console.log(example.replace("play", "Replace"));

//Only difference is slice doesnt do anything if you put something mayor first(10, 0)
console.log(example.slice(0, 10));
console.log(example.substring(0, 10));

const firstUser = "Luis"
console.log(firstUser.charAt(0));