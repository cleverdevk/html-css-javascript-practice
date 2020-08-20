const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + "/views"));

//ejs 적용
app.set("view engine", "ejs");

app.get("/",(req, res)=> {
    res.render("index",{data:[1,2,3,4,5,6]});
});

app.listen(9999, () => console.log("server is running on 9999 port"));