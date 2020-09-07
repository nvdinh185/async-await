let add = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != "number" || typeof (b) != "number") {
            return reject(new Error("Tham so phai co kieu number!"));
        }
        resolve(a + b);
    }, 1000)
})

let multiply = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != "number" || typeof (b) != "number") {
            return reject(new Error("Tham so phai co kieu number!"));
        }
        resolve(a * b);
    }, 1000)
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
    }, 1000)
})

let tinhDienTich1 = async (a, b, h) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await devide(abh, 2);
        return Promise.resolve(square);
    } catch (e) {
        return Promise.reject(e);
    }
}
let tinhDienTich2 = (a, b, h) => {
    return new Promise(async (resolve, reject) => {
        try {
            let ab = await add(a, b);
            let abh = await multiply(ab, h);
            let square = await devide(abh, 2);
            resolve(square);
        } catch (e) {
            reject(e);
        }
    })
}

(async () => {
    try {
        let square = await tinhDienTich2(4, 5, 6);
        console.log("Dien tich: ", square);
    } catch (err) {
        console.log(err + '');
    }
})();