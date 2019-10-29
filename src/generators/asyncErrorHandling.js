const foo = (parameters, callback) => {
    setTimeout(() => {
        callback(parameters);
    }, 100);
};

const curry = (method, ...args) => {
    return (callback) => {
        args.push(callback);

        return method.apply({}, args);
    };
};

const controller = (generator) => {
    const iterator = generator();

    const advancer = (response) => {
        if (response && response.error) {
            return iterator.throw(response.error);
        }

        const state = iterator.next(response);

        if (!state.done) {
            state.value(advancer);
        }
    }

    advancer();
};

controller(function* () {
    let a,
        b,
        c;

    try {
        a = yield curry(foo, 'a');
        b = yield curry(foo, {error: 'Something went wrong.'});
        c = yield curry(foo, 'c');
    } catch (e) {
        console.log(e);
    }

    console.log(a, b, c);
});