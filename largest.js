
 // teranry operator.

function checkIfAIsLargest(a,b,c){
    return a>b && a>c ? "a is largest": b>a && b>c ? "b is largest" : "c is largest";
}

console.log(checkIfAIsLargest(3,2,1));
  console.log(checkIfAIsLargest(1,3,2));
        console.log(checkIfAIsLargest(1,2,3));