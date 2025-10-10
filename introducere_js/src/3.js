const checkPrime = (n) =>{
    for(let i=2; i<= Math.sqrt(n);i++){
        if(!(n % i)) {
            return false
        }
    }
    return true
}

if (process.argv.length < 3){
    console.log('not enough params');
} else{
    console.log(checkPrime(parseInt(process.argv[2])));
}

function checkFibonacci (n) {
    if(n<0) return -1;
    if(n===0) return 0;
    if(n===1) return 1;

    let a=0, b=1, c;
    for(let i=1;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return b;
}

let n= parseInt(process.argv[2]);
console.log(checkFibonacci(n));