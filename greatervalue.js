
let greaterValue=(x,y,z) =>{

    let maxvalue;

    if(x>y && x>z){
        console.log(x + ` is maxvalue`);
    }
    else if (y>x && y>z){
        console.log(y + ` is maxvalue`);
    }
    else{
        console.log(z+` is maxvalue`);
    }
}
greaterValue(22,10,5);
greaterValue(10,20,5);
greaterValue(12,20,30);