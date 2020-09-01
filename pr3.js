let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) != "number" || typeof (b) != "number") {
                return reject(new Error("Tham so phai co kieu number!"));
            }
            resolve(a + b);
        }, 1000)
    })
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) != "number" || typeof (b) != "number") {
                return reject(new Error("Tham so phai co kieu number!"));
            }
            resolve(a * b);
        }, 1000)
    })
}

let devide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) != "number" || typeof (b) != "number") {
                return reject(new Error("Tham so phai co kieu number!"));
            }
            if (b == 0) {
                return reject(new Error("Khong the chia cho 0!"));
            }
            resolve(a / b);
        }, 1000)
    })
}

// add(4, 5)
//     .then(data => add(data, '6')
//     .then(result => console.log(result), err => console.log("Loi1: " + err)),
//     err => console.log("Loi2: " + err))

// add(4, '5')
//     .then(data => add(data, 6), err => console.log("Loi1: " + err))
//     .then(result => console.log(result),
//     err => console.log("Loi2: " + err))

// add(4, 5)
//     .then(data => add(data, '6'))
//     .then(result => console.log("Ket qua: " + result))
//     .catch(err => console.log("Loi: " + err))

// let tinhDienTichHinhThang = (a, b, h) => {
//     add(a, b)
//     .then(data => multiply(data, h))
//     .then(res => devide(res, 2))
//     .then(result => console.log("Ket qua: " + result))
//     .catch(err => console.log("Loi: " + err));
// }

// tinhDienTichHinhThang(2, 3, 2);

// let tinhDienTichHinhThang = (a, b, h) => {
//     return new Promise((resolve, reject) => {
//         add(a, b)
//             .then(data => multiply(data, h))
//             .then(res => devide(res, 2))
//             .then(result => resolve(result))
//             .catch(err => reject(err));
//     })
// }
// tinhDienTichHinhThang(2, 3, 2)
//     .then(data => console.log("Ket qua: " + data))
//     .catch(err => console.log("Loi: " + err));

let tinhDienTichHinhThang = (a, b, h) => {
    return add(a, b)
        .then(data => multiply(data, h))
        .then(res => devide(res, 2))
}

tinhDienTichHinhThang(2, 3, 2)
    .then(data => console.log("Ket qua: " + data))
    .catch(err => console.log("Loi: " + err));
