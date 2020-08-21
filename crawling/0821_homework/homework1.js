const puppeteer = require("puppeteer");
const dotenv = require('dotenv');
const fs = require("fs");
dotenv.config();

fs.readdir("screenshots", (err) => {
    if(err){
        console.error("images folder is not exist, create new folder 'screenshots'");
        fs.mkdirSync('screenshots');
    }
});

const crawler = async () => {
    try{
        const browser = await puppeteer.launch({headless: false, 
            args:['--window-size=1920,1080', '--disable-notifications']/*,
        userDataDir: 'C:\Users\dlsqo\AppData\Local\Google\Chrome\User Data'*/});
            
        const page = await browser.newPage();
        await page.setViewport({
            width:1080,
            height:1080
        });
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36");
        await page.goto("https://www.naver.com");
        await page.waitFor(1000);
        await page.click(".link_login");
        await page.waitFor(1000);

        let id = process.env.NAVERID
        let pw = process.env.NAVERPW;

        await page.type("#id", id, {delay: 200});
        await page.waitFor(1000);
        await page.type("#pw", pw, {delay: 300});
        await page.click("input[type=submit]");
        await page.waitFor(5000);
        const frame = page.frames().find(frame => frame.name() === 'minime');
        await frame.click(".new_box a");
        await page.waitFor(1000);
        await page.click(".memo");
        await page.waitFor(1000);
        await page.click(".btn.write._write_btn");
        await page.waitFor(1000);
        await page.type(".workseditor","크롤링 중입니다~"); 
        await page.waitFor(1000);
        await page.click(".button.btn_save._btn._ct_save");
        await page.waitFor(1000);
        await page.click(".memo");
        await page.waitFor(1000);
        await page.screenshot({path:'./screenshots/memos.jpg'});
        
        
        

    }catch(err){
        console.log(err);
    }
}

crawler();