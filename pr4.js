let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) != "number" || typeof (b) != "number") {
                return reject(new Error("Tham so phai co kieu number PHEP CONG!"));
            }
            resolve(a + b);
        }, 1000)
    })
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) != "number" || typeof (b) != "number") {
                return reject(new Error("Tham so phai co kieu number PHEP NHAN!"));
            }
            resolve(a * b);
        }, 2000)
    })
}

// Promise.all([multiply('4', 5), add('4', 5)])
// .then(res => console.log(res))
// .catch(err => console.log(err + ''))

Promise.race([multiply(4, 5), add(4, '5')])
.then(res => console.log(res))
.catch(err => console.log(err + ''))