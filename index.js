let mang = [4, 3, 7, 5, 1];

mang.forEach(function (e) {
    console.log(e);
})
mang.forEach((e) => {
    console.log(e);
})
mang.forEach(e => console.log(e))

var mang2 = mang.map(function (e) {
    return e * 2;
})
var mang3 = mang.map(e => {
    return e * 2;
})
var mang4 = mang.map(e => e * 2);

console.log(mang4);

function add(a, b) {
    return a + b;
}

let add2 = (a, b) => a + b;

console.log(add2(1, 2))