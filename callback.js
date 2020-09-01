let add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000)
}

add(4, 5, (err, result) => {
    if (err) return console.log("Loi: " + err);
    console.log("Ket qua: " + result);
})
