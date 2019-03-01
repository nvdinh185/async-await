let fs = require("fs");

/* let data = fs.readFile("./a.txt", 'utf-8', (err, data) => {
    if(err) return console.log("Loi: " + err);
    console.log("DaTa: ", data);
}); */

let data = fs.readFileSync("./a.txt", 'utf-8', (err, data) => {
    if(err) return console.log("Loi: " + err);
    console.log("DaTa: ", data);
})
console.log(data);
console.log("Ket thuc");