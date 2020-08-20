const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get("/", (req, res) => {
    return res.send("<h1>Main page</h1>");
});

app.use((req,res,next)=>{
    console.log("BODY : ", req.body);
    console.log("PARAMS : ",req.params);
    console.log("QUERY : ",req.query);
    next();
});

app.post("/user", (req,res) => {
    if(req.body.id && req.body.password){
        return res.json({signup:true, id:req.body.id, password:req.body.password});
    }
    return res.json({signup:false});
});

app.get("/user/:id", (req,res) => {
    if(req.params.id && req.query.name){
        return res.json({getid:true, id:req.params.id, name:req.query.name});
    }
    return res.json({getid:false});
});

app.get("/user", (req,res) => {
    return res.json({getid:false});
});

app.delete("/user/:id", (req, res) => {
    if (req.params.id) {
      return res.json({ delete: true, id: req.params.id });
    }
    return res.json({ delete: false });
});

app.delete("/user", (req,res) => {
    return res.json({delete:false});
});

app.patch("/user/:id", (req, res) => {
  if (req.body.name) {
    return res.json({ update: true, id: req.params.id, name:req.body.name });
  }
  return res.json({ update: false });
});

app.patch("/user", (req,res) => {
    return res.json({update:false});
});  

app.listen(7777, () => {
    console.log("server is running on port 7777....");
});
