
// MCQ 1

// function rec( num){
//     return (num) ? num%10 + rec(parseInt(num/10)):0;
//     }
//     console.log(rec(4567));


// infinite loop run

        // function f1(b){
        //     if(b==0)
        //     return 0
        //     else 
        //     {
        //     console.log("a")
        //     f1(b--);
        //     }
        //     }
        //     console.log(f1(10)); 


        // function mathTable(table,n){
        //     for(let i=1;i<=n;i++){
        //         console.log(`${table} * ${i} = ${table * i}`);
        //     }
        // }
        // mathTable(6,10);


        // function square(n){
        //     for(let i=1; i<=n; i++){
        //         console.log(`square of ${i} is ${i*i}`);
        //     }
        // }
        // square(5);


        // const x=6%2;
        // const y=x?`one`:`two`;
        // console.log(y);

        // let answer =true;
        // if(answer===false){
        //     return 0;
        //     console.log(answer);
        // }else{
        //     return 10;
        //     console.log(answer);
        // }


        // function verify(n){
        //     if(n%2==0){
        //         console.log("this is divided into two child");
        //     }
        //     else{
        //         console.log("not divided into two child");
        //     }
        // }
        // verify(8);
        // verify(7);


    //     function checkIfTriangle(a,b,c){
    //         if(a+b<=c || b+c<=a || c+a<=b){
    //             return false;
    //         }else {
    //             return true;
    //         }
    //     }
    //         const a=7; b=17; c=10;
    //         if(checkIfTriangle(a,b,c)){
    //             console.log("triangle");
    //         }else {
    //             console.log("not triangle");
    //         }
    // console.log(checkIfTriangle(a,b,c));

    // function oppositeSign(n){
    //     if(n>=0){
    //         console.log("positive Number");
    //     }else {
    //           console.log("Negative Number");
    //     }
    // }
    // oppositeSign(10);
    // oppositeSign(-10);
    // oppositeSign(0);
    

// function subArray(n){
//     for(let i=0; i<n; i++){
//         for(let j=i; j<n; j++){
//             for(let k=i; k<=j; k++){
//                 console.log(arr[k] );
//             }
//             console.log(",");
//         }
//     }
// }
// let arr = [1,2,3];
// subArray(arr.length)


// function addNumber(x,y){
//     if(isNaN(x)|| isNaN(y)){

//     }
// }
// console.log(addNumber(2,3));

// let rainForest=10;
// let animals= 0;

// while (rainForest<13 || animals<=2){
//     // rainForest++;
//     animals+=2;
// }
// console.log(animals);
// // console.log(rainForest);

// const factorial = (n)=>{
//     let multiply=1;
//     for(let i=n; i>0; i--){
//         multiply*=i;
//     }
//     return multiply;
// }
// let input= 5;
// console.log(factorial(input));


// const animals =["Rabits","dog", "Cat"];
// console.log(animals.unshift("Alligator"));


// const arr1=[1,2,3,4];
// const arr2 =[5,6];
// console.log(...arr1,...arr2);


// let arr = [1,2,3,4];
// arr.slice;
// arr.shift;
// arr.push;
// arr.replace;
// console.log(arr.slice);



