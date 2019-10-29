const generatorFunction1 = function* (count){
    while (count <= 10) {
        yield count;
        count += 1;
    }
    console.log('End counting from 0 to 10 in generatorFunction1');
    yield * generatorFunction2(count);
}

const generatorFunction2 = function* (count){
    while (count <= 20) {
        yield count;
        count += 1;
    }
    console.log('End counting from 11 to 20 in generatorFunction2');
    yield * generatorFunction3(count);
}

const generatorFunction3 = function* (count){
    while (count <= 30) {
        yield count;
        count += 1;
    }
    console.log('End counting from 21 to 30 in generatorFunction3');
}

let count = 0;
const iterator = generatorFunction1(count);


for (index of iterator){
    console.log(index);
}