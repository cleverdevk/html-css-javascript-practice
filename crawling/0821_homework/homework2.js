const puppeteer = require("puppeteer");
const dotenv = require('dotenv');
const fs = require('fs');
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
            args:['--window-size=1920,1080', '--disable-notifications'],
            userDataDir: 'C:\Users\dlsqo\AppData\Local\Google\Chrome\User Data'});
            
        const page = await browser.newPage();
        await page.setViewport({
            width:1080,
            height:1080
        });
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36");
        await page.goto("https://logins.daum.net/accounts/signinform.do?url=https%3A%2F%2Fwww.daum.net%2F");
        await page.waitFor(1000);

        let id = process.env.ID
        let pw = process.env.PASSWORD;

        await page.type("#id",id);
        await page.waitFor(2000);
        await page.type("#inputPwd", pw);
        await page.waitFor(2000);
        await page.click("#loginBtn");
        await page.waitFor(5000);
        await page.screenshot({path:'./screenshots/main.jpg'});

        await page.click(".link_basis");
        await page.waitFor(3000);

        await page.click(".btn_comm.btn_my");
        await page.waitFor(1000);

        await page.type("#mailSubject","크롤링..테스트");
        
        const frame = page.frames().find(frame => frame.name() === 'tx_canvas_wysiwyg');
        frame.evaluate(() => {
            document.querySelector('.tx-content-container').innerHTML = "<p>테스트 중입니다.</p>";
        });

        await page.click(".btn_toolbar.btn_write");
        await page.waitFor(1000);

        await page.screenshot({path:'./screenshots/mail_send.jpg'});

    }catch(err){
        console.log(err);
    }
}

crawler();