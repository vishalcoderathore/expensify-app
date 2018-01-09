const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = {
            name: 'Vishal',
            status: 'Student'
        };
        resolve(data);
        //reject('something went wrong');
    }, 2000);
});

console.log('before');


promise
    .then((data) => { 
        console.log('success ' , data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = {
                    name: 'Vishal',
                    status: 'Student'
                };
                resolve(data);
                //reject('something went wrong');
            }, 2000);
        });
    }).then((str) => { 
        console.log('Yes it ran. Promise chaining. ', str); 
    }),(
    (error) => {
        console.log('error', error);
    }
);

console.log('after');