

// string is a data type,and also work like an array.
// string is collection of individual letters/characters.

// var x = "Mumbai";
// //var x = 20;

// var output = x[5]+x[4]+x[3]+x[2]+x[1]+x[0];
// console.log(output);

function reverseString(str){
    var output="";
    for(let i=str.lenght-1; i>=0; i--){
        output = output+str[i];
    }
    console.log(output);
} 
reverseString("Gyanendra");
reverseString("ram");
reverseString("Shyam");

