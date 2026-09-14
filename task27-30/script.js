/*chalenge */

let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

console.log(a.charAt(13).toUpperCase() .repeat(8)); 

console.log([a.slice(2, 6)]);

console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`);

console.log(
  a.charAt(0).toLowerCase() +
  a.slice(1, -1).toUpperCase() +
  a.charAt(a.length - 1).toLowerCase()
);








let theNAME = "eyad";

console.log(theNAME);
console.log(theNAME[1]);

console.log(theNAME.charAt(1));
console.log(theNAME.length);

let userName = "Elzero";

console.log(userName[1]);                  // e
console.log(userName.charAt(1));           // e
console.log(userName.substring(1, 2));     // e
console.log(userName.slice(1, 2));         // e
console.log(userName.substr(1, 1));        // e
console.log(userName.split("")[0].repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.toLowerCase().includes(letterO.toLowerCase())); // True