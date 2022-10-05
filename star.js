
// let row = 5;
// let col = 5;

// let star;

//  for(let i=1; i<=row; i++){
//     star ="";

//     for(let j=1; j<=col; j++){
//         star +="*";
//     }
//     console.log(star);
//  }


let row = 5;
// let col = 5;

let star;

 for(let i=1; i<=row; i++){
    star ="     ";
    // add the white space at the left.

    for(let j=1; j<=(row-i); j++){
        star +=" ";
    }
    // add * to the output
    for(let k=0; k<(2*i-1); k++){
        star+="*";
    }
    console.log(star);
 }