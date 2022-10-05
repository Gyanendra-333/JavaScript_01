
function uniqueNumberSun(arr,n){

    // do xor all element and return
    let res=arr[0];
    for(let i=1; i<n; i++){
        res = res^arr[i];
        return res;
    }
}
    let array= [1,2,1,2,3];
    let n=5;
    console.log(uniqueNumberSun(array,n));
