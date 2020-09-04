const xlsxtojson = require("xlsx-to-json-lc");

const readExcel = (filenameInput) => new Promise((resolve, reject) => {
    try {
        xlsxtojson({
            input: filenameInput,
            output: null,
            lowerCaseHeaders: true,
            sheet: "dsqly"
        }, (err, result) => {
            if (err) {
                reject("Loi1:" + err);
            }
            resolve(result);
        });
    } catch (e) {
        reject("Loi2: " + e);
    }
})
const filenameInput = './dsmau.xlsx';
/* readExcel(filenameInput).then(data => console.log(data))
.catch(err => console.log(err)) */
let myFunction = async () => {
    let b = await readExcel(filenameInput);
    console.log(b)
}
myFunction()