
        function checkIfTriangle(a,b,c){
            if(a+b<=c || b+c<=a || c+a<=b){
                return false;
            }else {
                return true;
            }
        }
            const a=7; b=17; c=10;
            if(checkIfTriangle(a,b,c)){
                console.log("triangle");
            }else {
                console.log("not triangle");
            }
    console.log(checkIfTriangle(a,b,c));