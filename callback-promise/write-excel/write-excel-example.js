var Excel = require('exceljs');
var workbook = new Excel.Workbook();

workbook.xlsx.readFile('old.xlsx')
    .then(function () {
        var worksheet = workbook.getWorksheet(1);
        var row2 = worksheet.getRow(2);
        row2.getCell(1).value = 1;
        row2.getCell(2).value = "Nguyen Van Dinh1";
        row2.getCell(3).value = 1991;
        //row2.commit();
        row2 = worksheet.getRow(3);
        row2.getCell(1).value = 2;
        row2.getCell(2).value = "Nguyen Van Dinh2";
        row2.getCell(3).value = 1991;
        //row3.commit();
        return workbook.xlsx.writeFile('new.xlsx');
    })