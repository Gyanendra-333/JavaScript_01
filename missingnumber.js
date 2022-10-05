
const missingNumber= (arr) =>{
    let start = parseInt(arr[0]);
    let end = parseInt(arr[arr.length-1]);
    let currentSum =0;

    for(let i=start; i<=end; i++){
        currentSum+=i;
    }
    const actualSum = arr.reduce((previousValue, currentValue) => {return (parseInt(previousValue)+ parseInt(currentValue))},0 );
    
    return (currentSum-actualSum);
}
console.log(missingNumber([1,2,3,4,5,6,8,9]));