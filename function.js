

// function in JS

// 1=> function play very important role in JS>
// 2=> there are no of ways to work with a function.
// 3 => functions as a passed as a parameters.
// 4 => function is also a datatype in JS.

// function printMessage(message){
//     console.log(typeof message);  // type of message is "string".
//     console.log(message);
// }
// printMessage("I am Gyanendra");


var x = 10;

// create a function => function Expression.

const add = function(a,b){
    console.log(a+b);

}

const sub = function(a,b){
    console.log(a-b);
}

function calc(func){
func(10,20);
}
calc(add);  // => 30
calc(sub);  // => -10