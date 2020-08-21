const parser = require("csv-parse/lib/sync");
const fs = require("fs");
const puppeteer = require("puppeteer");

const csv = fs.readFileSync("./csv/chicken.csv");
const records = parser(csv.toString());

console.log(records);



const crawler = async (records) => {
    const browser = await puppeteer.launch({
        headless: true
    });
    
    await records.map(async (r) => {
        let page = await browser.newPage();
        console.log(r);
        await page.goto(r[1]);
        await page.waitFor(3000);
        await page.screenshot({path:`./screenshots/${r[0]}.jpg`, fullPage:true});
        if(r[0]==="교촌반반시리즈"){
            await page.pdf({path:`${__dirname}/pdf/${r[0]}.pdf`,format:'A4'});
        }
        await page.waitFor(3000);
    });

    // await Promise.all([
    //     page1.goto("https://www.naver.com"),
    //     page2.goto("https://www.daum.net"),
    //     page3.goto("https://www.google.com")
    // ]);

    
    // await Promise.all([
    //     await page1.waitFor(1000),
    //     await page2.waitFor(1000),
    //     await page3.waitFor(1000)
    // ]);

    // await page1.screenshot({path: "./screenshots/test.jpg", fullPage:true});
    // await page2.pdf({path:`${__dirname}/pdf/test1.pdf`,format:'A4'});
    // await page3.waitFor(6000);
    // const html = await page3.content();
    // fs.writeFileSync("example.html",html);

    // await Promise.all([
    //     page1.close(),
    //     page2.close(),
    //     page3.close()
    // ]);
    


    // await browser.close();
};

crawler(records);