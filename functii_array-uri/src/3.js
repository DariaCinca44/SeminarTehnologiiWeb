const formatString = (s, ...format) => {

    let modified = s
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== -1) {
            modified = modified.replace('{' + i + '}', format[i])
        }
    }
    return modified
}

console.log(formatString("this is a {0} string  and we've {1} it ", 'nice', 'modified'))

const prep= "am o {substantiv} {adjectiv}"
const values={substantiv:"casa",adjectiv:"frumoasa"};

const formatString2=(prep,values)=>{
    return prep.replace(/{(\w+)}/g,(match,val)=>{
        return val in values ? values[val]: match;
    })
}

console.log(formatString2(prep,values))