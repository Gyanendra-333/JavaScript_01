

function checkTime(time){

// 22-4 =>night
// 5-12 => morning
// 13-16 => afternoon
// 16-21 => evevning

if(time<4 && time >=22){
    console.log("This ia night");
}
elseif(time>=4 && time <=12);{
    console.log(morning);
}
elseif(time>=13 && time <=16);{
    console.log(afternoon);
}
elseif(time>=16 && time <=22);{
    console.log(evening);
}else{
    console.log("Invalid time");
   }
}
checkTime(6); // morning
checkTime(20); // evening 
checkTime(28); // invalid
checktime(14); // afternoon