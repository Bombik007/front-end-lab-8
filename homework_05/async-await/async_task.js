const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (triggerFail) {
                reject(false);
                return;
            }

            resolve(true);
        }, msec);
    });
};

const asyncFn = async () => {
    const result = await waitFewSec(1000);
    return result;
};

const doAsyncMagic = async () => {
    let result = [];
    for (let i = 0; i < 4; i++) {
        await asyncFn().then(item => result.push(item));
    }
    console.log(result);
}

doAsyncMagic(); 


async function* rangeGen() {
    for (let i = 1; i <= 15; i++) {
    yield i;
    }
}

const iterateRange = async () => {
    let sum = 0;
    for await (let i of rangeGen()) {
        sum += i;
    }
    return sum;
}
  
iterateRange(); // Promise {<resolved>: 120}