const orderCoffee= (type) =>{
    const types = {
        SPECIAL : 'SPECIAL' ,
        REGULAR: 'REGULAR'
    }

    if(Object.values(types).indexOf(type)===-1){
        throw new Error('coffee error');
    } else{
        console.log(`preparing ${type} coffee`);
    }
}

try{
    orderCoffee('REGULAR');
    orderCoffee('SWEET_COFFEE_NO_SUGAR_NO_CAFFEINE')
}catch (err){
    console.warn(err);
}

const increaseSalary = (array,percent) =>{
    let newSal;

    if(!Array.isArray(array)){
        throw new Error('must be an array');
    } else if(typeof percent !== "number"){
        throw new Error("must be a number");
    } else { 
        newSal=array.map(salary=>salary+(salary*percent/100));
    }
    return newSal;
}

try {
    const salaries= increaseSalary([100,400,210],10);
    console.log("Increased salaries: ", salaries);
    const salaries2=increaseSalary([100,400,210],'a');
    const salaries3=increaseSalary(100,10);
} catch (err) {
    console.warn(err);
}