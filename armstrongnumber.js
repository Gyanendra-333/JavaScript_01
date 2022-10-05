
let num = 153;
let res = 0;
let rem;
let temp = num;

while (temp>0){
    rem = temp%10;
    res+=rem*rem*rem;
    temp= parseInt(temp/10);
}
if(num==res){
    console.log("armstrong number");
}
else {
    console.log("not a armstrong number")
}