const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs");

fs.readdir("images", (err) => {
    if(err){
        console.error("images folder is not exist, create new folder 'images'");
        fs.mkdirSync('images');
    }
});

const crawler = async () => {
    try {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto("https://unsplash.com/s/photos/cat");
        let result = [];

        while(result.length <= 50){
            let srcs = await page.evaluate(() => {
                window.scrollTo(0, 0);
                const imageElements = document.querySelectorAll(".nDTlD");
                //  img._2zEKz
                console.log(imageElements);
                if(imageElements){
                    let images = [];
                    // querySelectorAll은 map, reduce, filter가 안됨.
                    // Array.from(imageElements)를 하면 사용 가능하다.
                    imageElements.forEach(el => {
                        const image = el.querySelector("img._2zEKz");
                        if(image && image.src){
                            images.push(image.src);
                        }
                        el.parentElement.removeChild(el);
                    });
                    window.scrollBy(0,100);
                    setTimeout(()=>{
                        window.scrollBy(0,200);
                    },500);
                    return images;
                }
            });
            result = result.concat(srcs);
            await page.waitForSelector("figure");
        }

        return result;

    } catch (err){
        console.log(err);
    }
}

const saveImages = async () => {
    let imageList = await crawler();
    imageList.forEach(async (src) => {
        const {data} = await axios.get(src.split("?")[0], {
            responseType:'arraybuffer'
        });
        console.log(src);
        console.log(data);
        fs.writeFileSync(`images/${new Date().valueOf()}.jpeg`,data);
    });
}

saveImages();