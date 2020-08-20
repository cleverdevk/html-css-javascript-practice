const express = require('express');
const app = express();
const dotenv = require('dotenv');
const {pool} = require('./db/');
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/views`));

app.get("/", async (req,res) => {
    try{
        const data = await pool.query("select * from todo");
        console.log(data[0]);
        return res.render("index",{
            data:data[0]
        });
    }catch(err){
        console.log(err);
        res.render("error",{
            title: "ERROR",
            data: "할일 목록 가져오기에 실패하였습니다.",
            msg: err
        });
    }
    return res.render("index");
});

app.post("/add", async (req,res)=>{
    console.log(req.body);
    const {todo} = req.body;
    try{
        const data = await pool.query("insert into todo set ?",[{
            todo: todo,
            checked: "false"
        }]);
        console.log(data);
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.render("error",{
            title: "ERROR",
            data: "할일 목록 추가에 실패하였습니다.",
            msg: err
        })
    }
    return res.render("index");
});

app.get("/update/check/:id", async (req,res) => {
    console.log(req.params);
    console.log(req.query);
    const {id} = req.params;
    const {checked} = req.query;
    try{
        const data = await pool.query("update todo set checked = ? where id = ?",[
            checked, id
        ]);
        res.redirect("/");
    }catch(err){
        res.render("error",{
            title: "error",
            data:"체크 목록 수정에 실패하였습니다.",
            msg: err
        });
    }
});

app.get("/update/todo/:id", async (req, res) => {
    console.log(req.params);
    console.log(req.query);
    const {id} = req.params;
    const {todo} = req.query;

    try{
        const data = await pool.query("update todo set todo = ? where id = ?",[
            todo, id
        ]);
        res.redirect("/");
    }catch(err){
        res.render("error",{
            title:"ERROR",
            data:"할 일 목록 수정에 실패하였습니다.",
            msg: err
        })
    }
});

app.get("/delete/todo/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const data = await pool.query("delete from todo where ?",[{id}]);
        res.redirect("/");
    }catch(err){
        res.render("error",{
            title:"ERROR",
            data:"할 일 목록 삭제에 실패하였습니다.",
            msg: err
        })
    }
});

app.get("*", (res, req) => {
    return res.render("error",{
        title: Error,
        data: "404 : PAGE NOT FOUND"
    });
})

app.listen(8000, () => console.log("Server is running on 8000 port"));

