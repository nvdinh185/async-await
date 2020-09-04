var Excel = require('exceljs');
var workbook = new Excel.Workbook();

(async () => {
    let wb = await workbook.xlsx.readFile('old.xlsx');
    let worksheet = wb.getWorksheet('Sheet1');
    var row = worksheet.getRow(2);
    row.getCell(1).value = 'element.stt';
    row.getCell(2).value = 'element.name';
    row.getCell(3).value = 'element.namsinh';
    workbook.xlsx.writeFile('question_50508131.xlsx');
})();

(async () => {
    let wb = await workbook.xlsx.readFile('old.xlsx');
    let worksheet = wb.getWorksheet(2);
    let row = worksheet.getRow(1);
    console.log(row.getCell(2).value);
    await workbook.xlsx.writeFile('new.xlsx');
    console.log(123);
})();