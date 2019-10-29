const generatorFunction = function* (z){
    while (true) {
        try{
            yield;
            yield z;
        } catch (e) {
            if(e == 'error'){
                throw 'ERROR';
            }
            console.log('Caught: ', e);
        }
    }
}

let a = 0;
const iterator = generatorFunction('WHATAFAAAK');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
try{
    iterator.throw('not error but throwed');
    iterator.throw('error');
} catch (e) {
    console.log('Not caught', e);
}
