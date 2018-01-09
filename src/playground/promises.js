const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('this is my resolved data');
        reject('something went wrong');
    }, 1500);
});

console.log('before');


promise.then(
    (success) => {
        console.log('success', success);
    },
    (error) => {
        console.log('error', error);
    }
);

console.log('after');