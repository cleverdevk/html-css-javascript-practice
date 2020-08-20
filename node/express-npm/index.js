const express = require("express");
const morgan = require("morgan");
const app = express();
const logger = require("morgan");

app.get("/", (req,res) => {
    return res.send("Hello Express");
});

app.use((req,res,next) => {
    console.log("동작쓰~");
    next();
});

const textMiddleware = (req,res,next) => {
    console.log("특정 부분에서만 동작합니다.");
    req.abc = "abc";
    next();
}

app.use(express.json()); // json 형식으로 데이터 전달.
app.use(express.urlencoded({extended: false})); // post, put 등 방식에서 데이터를 요청받기 위해 사용

app.get("/hello",textMiddleware, (req,res) => {
    console.log(req.abc);
    return res.json({hello: "hello"});
    
});

app.get("/", (req,res) => {
    return res.json({hello: "hello"});
});

app.listen(8000, () => console.log("8000 port is listening..."));