// 페이스북 좋아요 요정 프로젝트
const puppeteer = require("puppeteer");
const dotenv = require('dotenv');
dotenv.config();

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
        await page.goto("https://facebook.com");
        await page.waitFor(1000);

        let isLogined = await page.evaluate(() => {
            let profile = document.querySelector("._1vp5");
            console.log(profile);
            if(profile) return true;
            else return false;
        });

        if(!isLogined){
            let email = process.env.EMAIL
            let password = process.env.PASSWORD;

            await page.type("#email",email);
            await page.waitFor(2000);
            await page.type("#pass", password);
            await page.waitFor(2000);
            await page.click("button[type=submit]");
            await page.waitFor(5000);
        }
        // await page.waitForRequest((req) => {
        //     if(req.url().includes('login')) return;
        // });
        // await page.keyboard.press("Escape");

        await page.click("._2md");

        
        await page.waitFor(3000);
        /*
        let ids = [];
        ids = await page.evaluate(() => {
            ids = [];
            let feeds = document.querySelectorAll("[id^=hyperfeed_story]");
            feeds.forEach(li => {
                const id = li.id.split("_")[3];
                ids.push(id);
            })
            return ids;
        });
        console.log(ids);

        let names = [];
        names = await page.evaluate(() => {
            names = [];
            let feeds = document.querySelectorAll(".fwb.fcg a");
            feeds.forEach(li => {
                const name = li.textContent;
                names.push(name);
            })
            return names;
        });

        console.log(names);

        let images = [];
        images = await page.evaluate(() => {
            images = [];
            let feeds = document.querySelectorAll(".mtm img");
            feeds.forEach(li => {
                const img = li.src;
                images.push(img);
            })
            return images;
        });

        console.log(images);
        */

        // 피드 가져오기
        // document.querySelectorAll("[id^=hyperfeed_story]")
        // ^는 얘로 시작, *는 얘를 포함, 

        // 게시글의 ID, 작성자의 이름, 이미지, 좋아요 가져오자

        // 좋아요 눌릴 때 클래스 : _3_16 _6a-y _3l2t  _18vj
        // 좋아요 안눌렸을 때 클래스 :  _6a-y _3l2t  _18vj

        await page.waitForSelector("[id^=hyperfeed_story]");

        let result = [];
        while(result.length <= 10){
            const newPost = await page.evaluate(() => {
                const firstFeed = document.querySelector("[id^=hyperfeed_story]");
                const postId = firstFeed.id.split("_").slice(-1)[0];
                const name = document.querySelector(".fwb.fcg a") && document.querySelector(".fwb.fcg a").textContent;
                const image = document.querySelector(".mtm img") && document.querySelector(".mtm img").src;
                const content = document.querySelector(" .userContent") && document.querySelector(" .userContent").textContent;
                console.log(postId, name, image, content);
                firstFeed.parentNode.removeChild(firstFeed);
                return {
                    postId
                    ,name
                    ,image
                    ,content
                }
            });
            result.push(newPost);
            
    
            await page.waitFor(1000);
    
            await page.evaluate(() => {
                const firstFeed = document.querySelector("[id^=hyperfeed_story]");
                const liked = document.querySelector("._3_16");
                const likeButton = document.querySelector("._6a-y");
                if(!liked){
                    likeButton.click();
                }
            });
            await page.waitFor(1000);
        }

        console.log(result);

        



    }catch(err){
        console.log(err);
    }
}

crawler();