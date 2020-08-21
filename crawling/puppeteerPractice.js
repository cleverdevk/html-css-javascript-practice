const puppeteer = require("puppeteer");
const fs = require("fs");

const crawler = async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    // const page1 = await browser.newPage();
    // const page2 = await browser.newPage();
    // const page3 = await browser.newPage();
    
    const [page1, page2, page3] = await Promise.all([
        browser.newPage(),
        browser.newPage(),
        browser.newPage()
    ]);

    // await page1.goto("https://www.naver.com");
    // await page2.goto("https://www.daum.net");
    // await page3.goto("https://www.google.com");

    await Promise.all([
        page1.goto("https://www.naver.com"),
        page2.goto("https://www.daum.net"),
        page3.goto("https://www.google.com")
    ]);

    
    await Promise.all([
        await page1.waitFor(1000),
        await page2.waitFor(1000),
        await page3.waitFor(1000)
    ]);

    await page1.screenshot({path: "./screenshots/test.jpg", fullPage:true});
    await page2.pdf({path:`${__dirname}/pdf/test1.pdf`,format:'A4'});
    await page3.waitFor(6000);
    const html = await page3.content();
    fs.writeFileSync("example.html",html);

    await Promise.all([
        page1.close(),
        page2.close(),
        page3.close()
    ]);
    


    await browser.close();
};

crawler();