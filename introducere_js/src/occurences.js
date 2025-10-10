function occurences(text, character){
    let count=0;
    for(var i=0; i<text.length;i++){
        if(text.charAt(i)=== character){
            count++;
        }
    }
    return count;
}

function occurences2(text, character){
    return text.split(character).length-1;
}

let occurences3= (text,character) => text.split(character).length-1;


console.log(occurences("sample text", "e"));
console.log(occurences2("sample text", "e"));
console.log(occurences3("sample text", "e"));

function exercise(lista){
    let result = [];

    for(var i=0;i<lista.length;i++){
        result.push(lista[i]);
    }
    return result;
}

console.log(exercise([1,2,3,4]));