const xlsxtojson = require("xlsx-to-json-lc");

const readExcel = (filenameInput) => {
    try {
        xlsxtojson({
            input: filenameInput,
            output: null,
            lowerCaseHeaders: true,
            sheet: "dsqly"
        }, (err, result) => {
            if (err) {
                console.log("Loi1: " + err);
            }
            console.log(result);
        });
    } catch (e) {
        console.log("Loi2: " + e);
    }
}
const filenameInput = './dsmau.xlsx';
readExcel(filenameInput);