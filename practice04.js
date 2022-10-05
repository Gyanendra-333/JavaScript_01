
// func(x,y){
//     if(y=0) return 0;
//     return (x+func(x,y-1));
// }


// let numbers = [1, 4, 1, 2, 7, 5, 2];
// let count = [];
// let output =[];
// let i = 0;
// let max = Math.max(...numbers);

// // initialize counter
// for (i = 0; i <= max; i++) {
//   count[i] = 0;
// }

// // initialize output array
// for (i = 0; i < numbers.length; i++) {
//   output[i] = 0;
// }

// for (i = 0; i < numbers.length; i++) {
//   count[numbers[i]]++;
// }

// for (i = 1; i < count.length; i++) {
//   count[i] += count[i-1];
// }

// for (i = numbers.length - 1; i >= 0; i--) { 
//   output[--count[numbers[i]]] = numbers[i];
// }

// // output sorted array
// for (i = 0; i < output.length; i++) {
//   console.log(output[i]);
// }


// const myNumber = [1,2,3,4,5,6,7];
// const myName = (arr) =>{
//     return arr.map((x)=>x+3).filter((x)=>x<7);
// }
// console.log(myName(myNumber));


// const foo=([1,2,3,[7,8,9]]);
// const [n]= foo;
// JSON.parse(foo);
// console.log(n);


// var a==2;
// var b=4;
// var ans=a+b;
// console.log(ans);

//  var strinf ="40";
//  varvalueint =50;
//  console.log(strinf+varvalueint);

// console.log("ram">8);
// var numbers =20;
// a=10;
// // a+=5;
// a=a+5;
// console.log(a)


// var js=10;
// js*=5;
// console.log(js)


//  <html>
// <head>
// </head>
// <body>
// <h1>Calculator</h1>
// <p>Enter the values in the prompt</p>
// <p>Click on any of the below buttons to perform calculations</p>
// <button type="button" onclick="Add()">Add</button>
// <button type="button" onclick="Substract()">Subtract</button>
// <button type="button" onclick="Multiply()">Multiply</button>
// <button type="button" onclick="Divide()">Divide</button>
// <button type="button" onclick="Sqrt()">Square Root</button>
// <button type="button" onclick="power()">Power</button>
// </body>
// </html> 

  
// // Javascript program in-place Merge Sort
  
// // Merges two subarrays of arr[].
// // First subarray is arr[l..m]
// // Second subarray is arr[m+1..r]
// // Inplace Implementation
// function merge(arr, start, mid, end)
// {
//     let start2 = mid + 1;
  
//     // If the direct merge is already sorted
//     if (arr[mid] <= arr[start2]) 
//     {   return;
//     }
//     // Two pointers to maintain start
//     // of both arrays to merge
//     while (start <= mid && start2 <= end)
//     {
//         // If element 1 is in right place
//         if (arr[start] <= arr[start2]){
//             start++;
//         }else {
//             let value = arr[start2];
//             let index = start2;
  
//             // Shift all the elements between element 1
//             // element 2, right by 1.
//             while (index != start) 
//             {
//                 arr[index] = arr[index - 1];
//                 index--;
//             }
//             arr[start] = value;
//             // Update all the pointers
//             start++;
//             mid++;
//             start2++;
//         }}};
// console.log(merge(arr, start, mid, end))




// // javascript program to merge two sorted arrays
 
//     // Merge arr1[0..n1-1] and arr2[0..n2-1]
//     // into arr3[0..n1+n2-1]
//     function mergeArrays(arr1,  arr2 , n1 , n2,  arr3) {
//         var i = 0, j = 0, k = 0;
 
//         // Traverse both array
//         while (i < n1 && j < n2) {
//             // Check if current element of first
//             // array is smaller than current element
//             // of second array. If yes, store first
//             // array element and increment first array
//             // index. Otherwise do same with second array
//             if (arr1[i] < arr2[j])
//                 arr3[k++] = arr1[i++];
//             else
//                 arr3[k++] = arr2[j++];
//         }
 
//         // Store remaining elements of first array
//         while (i < n1)
//             arr3[k++] = arr1[i++];
 
//         // Store remaining elements of second array
//         while (j < n2)
//             arr3[k++] = arr2[j++];
//     }
 
     
//         var arr1 = [ 1, 3, 5, 7 ];
//         var n1 = arr1.length;
 
//         var arr2 = [ 2, 4, 6, 8 ];
//         var n2 = arr2.length;
 
//         var arr3 = Array(n1 + n2).fill(0);
 
//         mergeArrays(arr1, arr2, n1, n2, arr3);
 
//         console.log(("Array after merging<br/>"));
//         for (i = 0; i < n1 + n2; i++)
//             console.log((arr3[i] + " "));