const Excel = require('exceljs');
const workbook = new Excel.Workbook();

// workbook.xlsx.readFile('old.xlsx')
//     .then(() => {
//         let worksheet = workbook.getWorksheet(2);
//         let row = worksheet.getRow(1);
//         console.log(row.getCell(2).value);
//         row.getCell(2).value = "HoTen";
//         return workbook.xlsx.writeFile('new.xlsx');
//     })
//     .catch(err => console.log(err + ''))


(async () => {
    let wb = await workbook.xlsx.readFile('old.xlsx');
    let worksheet = wb.getWorksheet(2);
    let row = worksheet.getRow(1);
    console.log(row.getCell(2).value);
    await workbook.xlsx.writeFile('new.xlsx');
    console.log(123);
})();