String.prototype.capitalizeWords= function(){
    return this.replace(/\b[a-z]/g, match=>match.toUpperCase());
}

console.log("this words will be capitalized".capitalizeWords());


Number.prototype.times=function(f){
    for(let i=0;i<this;i++){
        f(i);
    }
};

(3).times(() =>{
    console.log('hello');
})