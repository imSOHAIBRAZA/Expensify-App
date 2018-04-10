const promise = new Promise((resolve, reject) => {

    // resolve('This is resolved data');
    reject('Something went wrong');
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error : ', error);
});