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
    }, 5000)
})

// Promise.all([multiply(4, 5), add(4, 5)])
//     .then(res => console.log(res))
//     .catch(err => console.log(err + ''))//reject nào trả về trước

Promise.race([multiply(4, 5), add(4, '5')])// Promise nào kết thúc trước thì sẽ
    .then(res => console.log(res))// lấy theo kết quả của Promise đó
    .catch(err => console.log(err + ''))