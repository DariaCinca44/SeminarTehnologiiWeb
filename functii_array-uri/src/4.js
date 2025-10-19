const sampleArray = [1, 2, 3, 4, 5]

const map = (array, transformation) => {

    const result = []
    for (const element of array) {
        result.push(transformation(element))
    }
    return result
}
console.log(map(sampleArray, (x) => x * 2))

const reduce=(array,reducer,initVal) => {
    let startIndex =0;
    let total = initVal;

    if(total===undefined){
        total=array[0];
        startIndex=1;
    }

    for(let i=startIndex;i<array.length;i++){
        total=reducer(total,array[i]);
    }
    return total;
}

const num=[1,2,5,6,9,5]
const sum=reduce(num,(sum,n) => sum+n,0)
console.log(sum)