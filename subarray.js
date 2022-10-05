
function subArray(n){
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            for(let k=i; k<=j; k++){
                console.log(arr[k] );
            }
            console.log(",");
        }
    }
}
let arr = [1,2,3];
subArray(arr.length)