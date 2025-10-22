class Stream{
    #value;
    #nextValue;
    static #count=0;
    constructor(value,nextValue){
        this.#value=value;
        this.#nextValue= nextValue;
        Stream.#count++;
    }

    get value(){
        return this.#value;
    }

    get next(){
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }

    static get count(){
        return Stream.#count;
    }
}

class ConstantStream extends Stream{
    constructor(value){
        super(value, value => value);
    }
}

class NextIntegerStream extends Stream{
     constructor(value){
        super(0, value => value + 1);
    }
}

const constant = new ConstantStream(1);
const nextInteger= new NextIntegerStream();
for(let i=0;i<10;i++){
    console.log(`constant[${i}]= ${constant.next}`);
    console.log(`nextInteger[${i}]= ${nextInteger.next}`);
}
console.log(Stream.count);

class Stream2{
    #value;
    constructor(value){
        this.#value= value%2 
        if(this.#value === 0){
            this.#value = value;
        } else {
            this.#value= value+1;
        }
    }

    next(){
        this.#value+=2;
        return this.#value;
    }
}

const a= new Stream2(5);
for(let i=0;i<5;i++){
    console.log(`a[${i}]=${a.next()}`);
}
console.log("");
const b= new Stream2(2);
for(let i=0;i<5;i++){
    console.log(`b[${i}]=${b.next()}`);
}
