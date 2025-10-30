import {rimraf} from 'rimraf';
import fs from 'fs';

const dir='./test';
const file=`${dir}/test.txt`;

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log(dir,' created');
}

fs.writeFileSync(file,'test');
console.log(file, ' created');

setTimeout(async() =>{
    await rimraf(dir);
    console.log(dir,'deleted');
},10000);