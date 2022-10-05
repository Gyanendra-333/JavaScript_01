

console.log("this is Comparision operators file.");

// ==, === ; check if equal; == single comparision; 
// <, >, <=, >= ;

// what it is and why it is needed.

var x=20
var y=20
// console.log(x==y); // true/false

y="20";
console.log(x==y); // true/false => true . 20="20"
console.log(x===y); // false because type dosent match
// ==  => checks only  equality of values.
// ===  => checks for equality of values as well as type.

var p=20;
var q=30;
console.log(p<q);  //  true
console.log(p>q);  // false
console.log("grater/less than equal to");
console.log(p<=q);  // true
console.log(p>=q);  // false

var x=[];
var y=[];
console.log(typeof x);
console.log(typeof y);

console.log(x==y);
//  false because object comparision will always  be false.

