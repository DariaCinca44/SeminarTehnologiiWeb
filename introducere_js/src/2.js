function checkDivisible(n,div) {
    if (n % div){
        return false;
    } else{
        return true;
    }
}

console.log(checkDivisible(10,2));
console.log(checkDivisible(10,7));

function checkLength(str1,str2){
    if(str1.length == str2.length){
        return true;
    }else{
        return false;
    }
};

console.log(checkLength("ana","maria"));
console.log(checkLength("ana","mac"));