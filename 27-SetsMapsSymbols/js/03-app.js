console.log("*********** Maps ************");

//Its like sets, but the values are objects
//You can stablish the key as any type of value
//Has better performance than an object
var map = new Map(); 

map.set("key1", "value1");
map.set(1, "value2");
map.set("key", { name: "Luis" });

console.log(map);
console.log(map.get("key"));