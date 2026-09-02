//*task 1*//
console.log("log");
console.error("error");
console.table(["ahmed", "eyad", "mohamed"]);

console.log(
  "chello from %cjs file",
  "color: red; font-size: 20px; background-color: yellow; padding: 10px; border-radius: 5px;"
);
console.log(
  "%cHello %cfrom %cJavaScript",
  "color: red; font-size: 40px;",
  "color: blue; font-size: 40px;",
  "color: green; font-size: 40px;"
 
);


console.log("Hello again, this time inside a group!");
console.group("Group 1");

console.log("Message One");
console.log("Message Two");

console.group("Child Group");

console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");

console.log("Message One");
console.log("Message Two");

console.groupEnd();
console.groupEnd();
console.groupEnd();


console.group("Group 2");

console.log("Message One");
console.log("Message Two");

console.groupEnd();

/*variable*/
var user = ("eyad")
console.log(user);
console.log(user);
console.log(user);
console.log(user);
console.log("Hello");
var hello = document.getElementById("hello");
hello.innerHTML = "Hello from JS file";
var user = 1;
var user = 3;
console.log(user);


let a = "we love";
let b = "JavaScript";
document.write(a + " " + b);