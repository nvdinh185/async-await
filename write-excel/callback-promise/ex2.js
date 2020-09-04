let add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof (a) != 'number' || typeof (b) != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 3000)
}

let add2 = (a, b) => new Promise((resolve, reject) => {
    add(a, b, (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

add2(2, 3).then(data => console.log(data))
    .catch(err => console.log(err))

let myFunction = async () => {
    let b = await add2(3, 4);
    console.log(b)
}
myFunction()