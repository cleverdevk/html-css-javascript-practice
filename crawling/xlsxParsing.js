const xlsx = require("xlsx");
const book = xlsx.readFile("./xlsx/data-movie.xlsx");

const sheet = book.Sheets.Sheet1;
const records = xlsx.utils.sheet_to_json(sheet);

console.log(records);