let add = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != "number" || typeof (b) != "number") {
            return reject(new Error("Tham so phai co kieu number PHEP CONG!"));
        }
        resolve(a + b);
    }, 2000)
})

let multiply = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != "number" || typeof (b) != "number") {
            return reject(new Error("Tham so phai co kieu number PHEP NHAN!"));
        }
        resolve(a * b);
    }, 3000)
})

let devide = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != "number" || typeof (b) != "number") {
            return reject(new Error("Tham so phai co kieu number!"));
        }
        if (b == 0) {
            return reject(new Error("Khong the chia cho 0!"));
        }
        resolve(a / b);
    }, 7000)
})

// Tính tổng theo đồng bộ
setTimeout(async () => {
    let abh = await multiply(4, 5);
    let ab = await add(4, 5);
    let square = await devide(4, 5);
    console.log("Dien tich: ", abh + ab + square);
}, 0);

// Tính tổng theo bất đồng bộ
Promise.all([multiply(4, 5), add(4, 5), devide(4, 5)])
    .then(res => {
        let sum = res.reduce((a, b) => {
            return a + b;
        }, 0);
        console.log(sum);
    })
    .catch(err => console.log(err + ''))//reject nào trả về trước

console.log(123);