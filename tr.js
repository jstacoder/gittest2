function getData(name){
    return require('fs').readFileSync(name).toString();
}

console.log(getData('testing_rebase'));
