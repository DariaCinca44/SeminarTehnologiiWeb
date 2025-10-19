const getAvg=(numbers)=>{
    const sum=numbers.reduce((a,b)=> a+b,0)
    return sum/numbers.length;
}

const numbers=[13,62,67,12,2,9,3]
console.log(getAvg(numbers))