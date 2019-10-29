const generatorFunction1 = function* (count){
    while (count < 100) {
        console.log(count);
        count += 1;
    }
}

let count = 0;
const iterator = generatorFunction1(count);


for (index of iterator){
    console.log(index);
}