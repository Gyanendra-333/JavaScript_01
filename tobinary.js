

let convertToBinary=(num)=>{
    let binaryNum=0;
    let rem, quotient, i=1, step=1;

    while(num!=0){
        rem= rem% 2;
        quotient = parseInt(num/2);
        console.log(`step : ${step} => ${num}/2, reminder= ${rem}, quotient = ${quotient}`);

        num= quotient;
        step++;

        binaryNum = binaryNum+rem*i;
        i=i*10;
    }
    console.log(`binary Number : ${binaryNum}`);
}
convertToBinary(16);
convertToBinary(13);