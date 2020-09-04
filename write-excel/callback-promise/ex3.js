let promise = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != 'number' || typeof (b) != 'number') {
            reject(new Error('Tham so phai co kieu number'));
        }
        resolve(a + b);
    }, 2000)
});

/* promise(2, 3).then(data => console.log(data))
    .catch(err => console.log(err))
 */
let myFunction = async () => {
    let a = await promise(2, 4);
    console.log(a)
}
myFunction()