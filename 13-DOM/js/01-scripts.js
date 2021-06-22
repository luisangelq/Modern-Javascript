console.log("************Access to elements************");

let element;
let links;

element = document;
element = document.all;
element = document.head;
element = document.body;
element = document.domain;
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].classList;
element = document.forms[0].action;

links = document.links;
links = document.links[4];
links = document.links[4].classList;
links = document.links[4].className;

element = document.scripts;

element = document.images;


console.log(element);
console.log(links);
