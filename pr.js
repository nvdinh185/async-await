let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Thanh cong");
        reject(new Error("Khong the ket noi den server"));
    }, 2000)
});

aPromise.then(msg => console.log("Da thuc thi " + msg),
    (errMsg) => console.log(errMsg + ''));

