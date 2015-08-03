function getData(name){
    return require('fs').readFileSync(name).toString();
}

console.log(getData('test_more'));
console.log(getData('t'));
console.log(getData('adding'));
