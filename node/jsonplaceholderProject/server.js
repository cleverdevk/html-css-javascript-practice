const express = require("express");
const app = express();
const axios = require("axios");
const PORT = 1111;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/views`));

app.get("/", async (req, res) => {
    try{
        const page = Number(req.query.page);
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            // axios의 params는 querystring
            params:{
                _start: page ? (page-1) * 9 : 0,
                _limit: 9
            }
        });
        console.log(data);
        return res.render("index",{data:data, page:page ? page : 1});
    }catch(err){
        console.log(err);
        res.render("error");
    }
    
});



app.get("/detail/:id", async (req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const urls = [
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    ];
    // Promise.all은 동시에 전부 보내기 때문에 순서가 보장되지 않는다.
    const [post, comments] = await Promise.all(
        urls.map(url=>{
            return axios.get(url)
            .then(res => res.data)
            .catch(err => console.log(err));
        })
    );
    console.log(post);
    console.log(comments);
    res.render("detail",{
        post:post,
        comments:comments
    });
        
});

// 에러처리는 맨 마지막에 와야 한다.
app.get("*", (req, res) => {
    res.render("error");
});



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
