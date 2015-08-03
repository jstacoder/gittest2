function getData(name){
    return require('fs').readFileSync(name).toString();
}

console.log(getData('test_more'));
