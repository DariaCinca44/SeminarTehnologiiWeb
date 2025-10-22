function fibFen(){
    const cache=[1,1];
    const fib =(index)=>{
        if(index < cache.length){
            console.log('found '+index);
            return cache[index];
        }else{
            console.log('calculated '+index);
            cache[index]= fib(index-1)+fib(index-2);
            return cache[index];
        }
    }
    return fib;
}

const fib= fibFen();
console.log(fib(1));
console.log(fib(5));
console.log(fib(3));

function exponential(){
    const cache = {};
    const pow = (a,b) => {
        const pair = `${a},${b}`;
        if(cache[pair] !== undefined){
            console.log(`found ${cache[pair]}`);
            return cache[pair];
        } 

        if(b===0){
            cache[pair]=1;
            return 1;
        }

        cache[pair]=a*pow(a,b-1);
        console.log(`calculated ${cache[pair]}`);
        console.log(`cache` , cache);
        return cache[pair];
    }
    return pow;
}

console.log("");
const pow=exponential();
console.log(pow(3,5));
console.log(pow(3,5));