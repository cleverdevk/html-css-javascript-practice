const parser = require("csv-parse/lib/sync");
const fs = require("fs");

// 딱 한번만 실행될 때 sync를 사용
// 여러번 호출되거나 하는 문제에서는 sync를 사용하지 않고
// 기존의 비동기나, promise를 활용한다.
const csv = fs.readFileSync("./csv/FL_insurance_sample.csv");
const records = parser(csv.toString());
const filteredRecords = records.filter(li => li[2]==="MIAMI DADE COUNTY" && li[16]==="Wood");
const [one,county]
console.log(filteredRecords);
