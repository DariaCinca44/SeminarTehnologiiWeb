function deepClone(obj){
        if(obj==null || typeof obj !== 'object'){
            return obj;
        }

        if(Array.isArray(obj)){
            const newArray=[];
            for(let i=0;i<obj.length;i++){
                newArray[i]=deepClone(obj[i]);
            }
            return newArray;
        }
        
        const clone={};
        for(let key in obj){
            clone[key]=deepClone(obj[key]);
        }
    return clone;
}

const dog={
    name: "Bobo",
    age: 1,
    adress: "Oradea",
    food: ['treats', 'carrots', 'chicken']
}

const clone = deepClone(dog);

clone.adress="Timisoara";
clone.food[1]="pumpkin";

console.log("Dog: ", dog);
console.log("Clone: ", clone);