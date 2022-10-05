
// var a=[1,2,4,5,6,7];
// console.log(a.splice(2,3));


// function selectionSortName(inputArray){
//     var i,j,minimumIndex;
//     for (let i=0; i<inputArray.length-1; i++){

//         // initilize the current element as minimumIndex
//         minimumIndex =i;
//         for(let j=i+1; j<inputArray.length; j++){
//             if (inputArray[j].localeCompare(inputArray[minimumIndex])==-1){
//                 minimumIndex = j;
//             }
//         }
//         // swap the found minimum element with the current element
//         if (minimumIndex !=i){
             
//             var temp = inputArray[minimumIndex];
//             inputArray[minimumIndex]=inputArray[i];
//             inputArray[i] = temp;
//         }
//     }
//     return inputArray;
// }
// var arr = ["India","Australia","China","Russia","Brazil","Japan"];
// console.log(selectionSortName(arr));

// var arr = [10,20,30,5,3,2,1];
// var arr = ["India","Australia","Russia","Brazil","Japan"];
// function compare(a,b){
//     if(b>a){
//         return 1;
//     }
//     else { 
//         return -1 ;
//     }
// }
// arr.sort(compare);
// console.log(arr);


// var arr = ["India","Australia","Russia","Brazil","Japan"];
// function compare(a,b){
//     if (a>b){
//         return 1;
//     }
//     else{ 
//         return -1;
//     }
// }
// arr.sort(compare);
// console.log(arr);


// const foo=[1,2,3];
// const [n]= foo;
// console.log(n);


// const missingNumber= (arr) =>{
//     let start = parseInt(arr[0]);
//     let end = parseInt(arr[arr.length-1]);
//     let currentSum =0;

//     for(let i=start; i<=end; i++){
//         currentSum+=i;
//     }
//     const actualSum = arr.reduce((previousValue, currentValue) => {return (parseInt(previousValue)+ parseInt(currentValue))},0 );
    
//     return (currentSum-actualSum);
// }
// console.log(missingNumber([1,2,3,4,5,6,8,9]));


// const oddLetter = letter => {

 
//     const letterArr = letter.split(" ");
//     const letterLen =letterArr.length;
//     const middle = (letterLen-1)/2;
//     const newLetter =letterArr.slice(middle).concat(letterArr.slice(0,middle));
//     const arr =[];

//     letterArr.array.forEach(element=> {arr.push(newLetter.join(""));
//         newLetter.pop()
//         newLetter.unshift("");
//     });
//     arr.reverse();
//     return arr.join("\n");
// }
// console.log(oddLetter("WELCOME"));


// var arr1 = [1,3,8,9];
// var arr2 = [4,5,7];

// function mergeTwoArray(arr1,arr2){

//     let index1 = 0;
//     let index2 = 0;
//     let current = 0;
//     let merged = [];

//     while (current<(arr1.length +arr2.length)){

//         let isArr1Depleted = index1>=arr1.length;
//         let isArr2Depleted = index2>=arr2.length;

//         if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] <arr2[index2]))){

//             merged[current] = arr1[index1];
//             index1++;
//         } else {
//             merged[current]= arr2[index2];
//             index2++;
//         }
//         current++;
//     }
//     return merged;
// }
// console.log(mergeTwoArray(arr1,arr2));