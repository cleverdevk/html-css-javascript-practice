const express = require("express");
const app = express();
const morgan = require("morgan");

const {sequelize, User} = require("./models");
const { addHook } = require("./models/user");
const Orderlist = require("./models/orderlist");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));


// true일 때는 호출 될 때 마다 테이블이 새로 생성됨.
sequelize.sync({force: false})
.then(() => console.log("db 접속 성공"))
.catch(err => console.log(err));

// Op.gt(초과) OP.gte(이상) Op.lt(미만) Op.lte(이하) Op.ne(같지 않음)
// Op.or(또는) Op.in(배열 요소 중 하나) Op.notIn(배열 요소가 모두 다름)

app.get("/", async (req, res) => {
    try {
        const data = await User.findAll({});
        return res.json({data:data});
    } catch (err) {
        console.log(err);
    }
    
});

app.get("/orderlist", async (req, res) => {
    try {
        const data = await Orderlist.findAll({attributes: ["name", 'DESC'], where:{
            name:"BBQ"
        }, offset:0, limit:1});
        return res.json({data:data});
    } catch (err) {
        console.log(err);
    }
    
});

app.post("/", async (req, res) => {
    const createData = await User.create({
        name: "홍길동",
        age: 24
    });
    return res.json({createData:createData});
});

app.post("/orderlist", async (req, res) => {
    const createData = await Orderlist.create({
        name: "BBQ",
        type: "치킨"
    });
    return res.json({createData:createData});
});

app.patch("/", async (req, res) => {
    try {
        const updateData = await User.update({name:"제니"},{where: {name:"홍길동"}});
        return res.json({updateData:updateData});
    } catch (err) {
        console.log(err);
    }
});

app.delete("/", async (req, res) => {
    try {
        const deleteData = await User.destroy({where: {name:"홍길동"}});
        return res.json({deleteData:deleteData});
    } catch (err) {
        console.log(err);
    }
});


app.listen(8888, () => console.log("server is running on 8888 port"));
