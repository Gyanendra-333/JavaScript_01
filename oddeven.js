

function IsOddOrEven(num){
 
    // 1=> Modular Operator %.

    // if (num%2==0){
    //     return"even";
    // }
    // else{
    //     return"odd";
    // }
    //  2=> using ternaary operator.
    // <conditional Expression> ? resultIf Exprssion Is true : result if Expression is false.

    return num%2==0 ? "even": "odd";  // this is called ternary operation method.
}
console.log(IsOddOrEven(10));
console.log(IsOddOrEven(101));