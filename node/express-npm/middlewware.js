const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json()); // json 형식으로 데이터 전달.
app.use(express.urlencoded({extended: false})); // post, put 등 방식에서 데이터를 요청받기 위해 사용

const otherMiddleware = (req,res,next) => {
    req.b = 15;
    next();
};

app.use((req,res,next) => {
    req.a = 30;
    console.log(process.env.NAME);  
    console.log(__dirname);
    console.log(__filename);
    next();
});

app.get("/", (req,res) => {
    console.log(req.a);
    
    return res.send("Hello");
});

app.get("/add", (req,res) => {
    console.log(req.a+req.a);
    return res.send("Hello");
});
app.get("/sub", (req,res) => {
    console.log(req.a-1);
    return res.send("Hello");
});
app.get("/multi", (req,res) => {
    console.log(req.a*req.a);
    return res.send("Hello");
});

app.get("/other", otherMiddleware, (req,res) => {
    console.log(req.a+req.b);
    return res.send("Hello");
});



app.listen(8000, () => {
    console.log("8000 port is listening...");
});