const express = require('express');
const app = express();
// index면 생략 가능하다.
// const {pool} = require("./db/index");
const {pool} = require("./db/index");


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    // const data = await pool.query("SELECT * FROM test_for_mysql2.user");
    //const data = await pool.query("insert into user set ?", {name: "hello"});

    console.log(data[0]);
    return res.json({hello:"get hello"});
});

app.post("/", (req,res)=>{
    return res.json({hello:"post hello"});
});

app.listen(9876, () => console.log("server is running on 9876 port..."));
