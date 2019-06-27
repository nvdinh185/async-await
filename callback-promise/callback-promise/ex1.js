let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Khong the ket noi den server"));
        resolve("Thanh cong");
    }, 2000)
});
let add2 = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof (a) != "number" || typeof (b) != "number") {
            return reject(new Error("Tham so phai co kieu number!"));
        }
        resolve(a + b);
    }, 1000)
})

//add2(3, 4).then(res => console.log(res)).catch(err => console.log(err))
let myFunction = async () => {
    let a = await add2(2, 4);
    console.log(a)
}
myFunction()