const getTotalArea = (squareDimensions) => {
    return squareDimensions.map((side) => {
        return side * side
    }).reduce((prev, current) => {
        return prev + current
    }, 0)

}

const squareDimensions = [3, 5, 12, 3, 5, 3]

const result = getTotalArea(squareDimensions)
console.log("result: ", result)

const getTotalArea2 = (squareDimensions) =>
    squareDimensions.map((side) => side * side).reduce((prev, current) => prev + current, 0)

const result2 = getTotalArea2(squareDimensions)
console.log("result 2:", result2)


const nr= [56,285,124,621,51,46,213]
const div=2;

const getSumDiv=(numbers,divisor) => {
    return numbers.map((number)=>{
        return number%divisor===0 ? number : 0;
    }).reduce((prev,current)=>{
        return prev+current;
    },0) 
}

const result3=getSumDiv(nr,div);
console.log("result 3:",result3);