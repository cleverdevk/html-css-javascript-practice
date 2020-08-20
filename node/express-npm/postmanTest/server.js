const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.get("/", (req,res) => {
    return res.json({hello: "get Hello"});
});

app.post("/", (req,res) => {
    console.log(req.body);
    return res.json({hello: "get Hello"});
    
});

app.patch("/", (req,res) => {
    return res.json({hello: "get Hello"});
});

app.delete("/", (req,res) => {
    return res.json({hello: "get Hello"});
});

app.listen(8080, ()=>{
    console.log("8080 port listening...");
});