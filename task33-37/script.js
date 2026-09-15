
// تكليف 1

// let st = "Elzero Web School";

// if ((st.length * 2).toString() === "34") {
//   console.log("Good");
// }
// if (st.charAt(st.indexOf("W")).toUpperCase() === "W") {
//   console.log("Good");
// }
// if (st.length !== "string")
//     console.log("Good");
 
// if ( typeof st.length === "number")
//     console.log("Good");
// if (st.slice(0,6).repeat(2) === "ElzeroElzero")
// console.log("good");


// تكليف 2

// Test Case 1
// let num = 9;

// if (num < 10) {
//   console.log(`00${num}`);
// }


// let num = 20; 
// if ( 10< num< 100){
//     console.log(`0${num}`);
// }

// // Test Case 3
// let num = 110; 
// if( num >= 100){
//     console.log(num);
// }


// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if(num1 == str) {
//     console.log(`${num1} Is The Same Value As ${str}`);
// }
// if(num1 == str && typeof num1 !== typeof str) {
//     console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }
// if(num1 != str2 || typeof num1 ===typeof str2) {
//   console.log(`${num1} isnot the same value ${str2} but the same type`);}

// if(str != str2 && typeof str ==typeof str2){
//     console.log(`${str} isnot the same value ${str2} but the same type`);
// }


// تكليف 3
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3 > num1 && typeof num3 !== typeof num1) {
//     console.log(`${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`);
// }
// if(num2 > num1 && typeof num3 !== typeof num1) {
//     console.log(`${num2} Is Larger Than ${num1}And Value Is The Same As 30 And Type string Not The Same Type As number"`);
// }

// if (num3 !== num1 && typeof num3 !== typeof num1 && num3 !== num2 && typeof num3 !== typeof num2) {
//   console.log(
//     `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//   );

//   تكليف 4

  // Edit What You Want Here

let num1 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;


/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
