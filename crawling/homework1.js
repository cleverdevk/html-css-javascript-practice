const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

const crwaler = async (link) => {
    
    const res = await axios.get(link);
    if(res.status === 200){
        // 정상적으로 긁어왔다면
        const html = res.data;
        const $ = cheerio.load(html);
        const menus = [];
        const calorys =[];
        $(".menu-list li").each((acc,cur) => {
            const menu = $(cur).find("h3").text();
            const calory = $(cur).find(".description strong")
                                .text().split("/")[0].split(" – ")[0]
                                .replace(" cal","")
                                .replace("16 oz. Draft ","")
                                .replace("White ","")
                                .replace("Glass: ","");
            if(calory === ""){
                menus.push({
                    calory: -1,
                    name: menu
                    
                })
            }else{
                menus.push({
                    calory: Number(calory),
                    name: menu
                    
                })
            }
        });
        
        menus.sort((a,b) => {
            if(a.calory < b.calory) return 1;
            else if(a.calory==b.calory) return 0;
            else return -1;
        });
        
        for(let m of menus){
            if(m.calory===-1){
                console.log(m.name + " 칼로리 정보 없음");
            }else{
                console.log(m.name, m.calory);
            }
        }
    }
}

crwaler("https://www.shakeshack.com/food-and-drink");