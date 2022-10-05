
let sumOfMinMax = (arr , n) =>{
    let maxvalue = Number.MAX_VALUE;
    let minvalue = Number.MIN_VALUE;

    for( let i=0; i<n; i++){
        if (minvalue>arr[i]){

            minvalue = arr[i];
        }
        if(maxvalue<arr[i]){
            maxvalue=arr[i];
        }
    }
    return minvalue+maxvalue
}
const arr = [5,2,1,9];
console.log(sumOfMinMax(arr,arr.length));