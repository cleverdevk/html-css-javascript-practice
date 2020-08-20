const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + "/views"));

//ejs 적용
app.set("view engine", "ejs");

app.get("/",(req, res)=> {
    res.render("practice",{data:[1,2,3,4,5,6,7,8,9,10]});
});

app.listen(8888, () => console.log("server is running on 8888 port"));