const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const csv = fs.readFileSync(`${__dirname}/csv/data-movie.csv`);
const records = parse(csv.toString());
console.log(records);

const crwaler = () => {
    Promise.all(records.map( async ([title, link]) => {
        const res = await axios.get(link);
        if(res.status === 200){
            // 정상적으로 긁어왔다면
            const html = res.data;
            const $ = cheerio.load(html);
            const $$ = cheerio.load(html);
            const text = $(".score.score_left .star_score").text();
            const age = $(".info_spec dd:nth-of-type(4) a:first-of-type").text();
            console.log(title, link, age);
        }
        // document.querySelector(".score.score_left .star_score");
    }))
}

crwaler();