const excel = require('node-excel-export');
const fs = require('fs');

const heading = [
    [
        {
            value: 'Danh sach sinh vien',
            style: {}
        }
    ],
];

const specification = {
    customer_name: {
        displayName: 'Customer',
        headerStyle: {},
        width: 120
    },
    status_id: {
        displayName: 'Status',
        headerStyle: {},
        cellFormat: function (value, row) {
            return (value == 1) ? 'Active' : 'Inactive';
        },
        width: '20'
    },
    note: {
        displayName: 'Description',
        headerStyle: {},
        width: 220
    }
}

const dataset = [
    { customer_name: 'IBM', status_id: 1, note: 'some note' },
    { customer_name: 'HP', status_id: 0, note: 'some note' },
    { customer_name: 'MS', status_id: 0, note: 'some note' }
]

const merges = [{ start: { row: 1, column: 1 }, end: { row: 1, column: 3 } }]

const report = excel.buildExport(
    [
        {
            name: 'Report',
            heading: heading,
            merges: merges,
            specification: specification,
            data: dataset
        }
    ]
);

fs.writeFile('./report.xlsx', report, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('excel ./report.xlsx saved!');
    }
});