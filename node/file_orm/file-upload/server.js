const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const PORT = 7777;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, "upload/");
        },
        filename: (req, file, done) => {
            console.log(file);
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize : 15 * 1024 * 1024} // 15메가
});

app.get("/", (req, res) => {
    return res.render("index");
});

app.post("/upload", upload.single("userfile"), (req, res) => {
    console.log(req.file);
    return res.json({data:req.file});
});

app.post("/upload-multiple-fields", 
    upload.fields([{name: "userfile1"}
                ,{name: "userfile2"}
                ,{name: "userfile3"}]), 
    (req, res) => {
        console.log(req.files);
        return res.json({data:req.files});
    }
);

app.post("/upload-multiple", 
    upload.array("userfiles"),
    (req,res)=>{
        console.log(req.files);
        return res.json({data:req.files});
    }  
)

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));

