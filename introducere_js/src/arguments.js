function addToArray(array, ...args){
    for (var i =0; i<args.length;i++){
        array.push(args[i]);
    }
    return array;
}
let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));

function addArray(array,array2){
    let result=[];

    if(array.length!=array2.length){
        return -1;
    } else{
        for(var i=0;i<array.length;i++){
           result.push(array[i]);
           result.push(array2[i]);
        }
    }
    return result;
}

console.log(addArray([1,2,3],[4,5,6]));