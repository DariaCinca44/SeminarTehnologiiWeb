const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']

const sampleText = `
    best
    read
    on
    windy
    nights
`
const checkAcrostic = (text, dictionary) => {
    const candidate = text.split('\n').filter(e => e).map(e => e.trim()).map(e => e[0]).join('')

    return dictionary.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, sampleDictionary))

const censor= (text,dictionary) =>{
    for(const word of dictionary){
        const exp= new RegExp(`\\b${word}\\b`, 'g');
        
        text=text.replace(exp, (match)=>{
            const init=match[0];
            const last=match[match.length-1];
            const mid='*'.repeat(match.length-2);
            return init+mid+last;
        })
    }
    return text;
}

const text="javascript este minunat"
const dict=["este"]

console.log(censor(text,dict))