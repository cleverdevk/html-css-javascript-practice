const express = require("express");
const app = express();

const {sequelize, Info} = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs")

sequelize.sync({force: false})
.then(() => console.log("db Connected"))
.catch(err => console.log(err));

app.get("/", async (req, res) => {
    try {
        const data = await Info.findAll({});
        return res.render("index",{data:data});
    } catch (err) {
        console.log(err);
    }
    
});

app.post("/add", async (req, res) => {
    const body = req.body;
    const data = await Info.findAll({});
    try {
        const createData = await Info.create({
            name: body.name,
            email: body.email,
            address: body.address,
            phone : body.phone,
            agree: body.agree
        });
        res.redirect("/");
        
    } catch (err) {
        console.log(err);
    }
    return res.render("index",{data:data});
});

app.get("/update/info/:id", async (req, res) => {
    const query = req.query;
    const data = await Info.findAll({});
    const {id} = req.params;
    console.log(query.name);
    try {
        const updateData = await Info.update({
            name: query.name,
            email: query.email,
            address: query.address,
            phone : query.phone,
            agree: query.agree
        },{where: {id:id}});
        res.redirect("/");
        
    } catch (err) {
        console.log(err);
    }
    return res.render("index",{data:data});
})

app.get("/delete/info/:id", async (req, res) => {
    const query = req.query;
    const data = await Info.findAll({});
    const {id} = req.params;
    console.log(query.name);
    try {
        const deleteData = await Info.destroy({where: {id:id}});
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
    return res.render("index",{data:data});
})

app.post("/", async (req, res) => {
    const createData = await Info.create({
        name: "test2",
        email: "test2@testtest.com",
        address: "busan",
        phone : "01023456789",
        agree: 1
    });
    return res.json({createData:createData});
});

app.listen(8888, () => console.log("server is running on 8888 port"));
