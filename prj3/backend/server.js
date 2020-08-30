const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 8000;
const {sequelize, User, Post } = require("./models");
const { hashPassword, comparePassword } = require("./utils/bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;
const cors = require('cors');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

sequelize.sync({force: false})
.then(() => console.log("DB 접속 성공"))
.catch(err => console.log(err));

const upload = multer({
    storage: multer.diskStorage({
        // 폴더위치 지정
        destination: (req, file, done) => {
        done(null, "uploads/");
        },
        // 파일 이름 지정
        filename: (req, file, done) => {
            const ext = path.extname(file.originalname);
            const fileName = path.basename(file.originalname, ext) + "&&" + Date.now() + ext;
            done(null, fileName);
            req.fileDir = fileName;
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
})

app.get("/api/user", async (req, res) => {
    // 중복 체크
    try{
        const {email} = req.query;
        if (email) {
            const data = await User.findAll({
                where:{
                    email:email
                }
            });
            if(data[0])
                return res.json({duplicate: false});
            else
                return res.json({duplicate:true});
        } else {
            return res.json({error:true});
        }
    } catch (err) {
        console.log(error);
        return res.json({error: true});
    }
});


app.post("/api/user", async (req, res) => {
    try {
        // 회원가입 부분
        // console.log(req.body);
        const {email, password, name} = req.body;

        if (email && password && name) {
            const hashedPassword = await hashPassword(password);
            console.log(hashedPassword);
            const data = await User.create({
                email: email,
                password: hashedPassword,
                name: name
            });
            console.log(data);
            // INVALID VALUE
            return res.json({signup: true, errcode:"INV"});
        }else {
            throw new Error();
        }
    } catch(error) {
        console.log(error);
        // DUPLICATE
        return res.json({signup: false, errcode:"DUP"});
    }
});

app.post("/api/login", async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        // 암호화된 비밀번호를 가져온다.
        const userData = await User.findOne({
            attributes: ["id", "password"],
            where:{
                email: email
            }
        });
        const hashedPassword = userData.dataValues.password;
        console.log(userData);
        // 비밀번호와 암호화된 비밀번호를 대조해야한다.
        const compareResult = await comparePassword(password, hashedPassword);
        console.log(compareResult);
        if (compareResult) {
            return res.json({login:true, id: userData.dataValues.id});
        } else {
            throw new Error();
        }

    } catch(error) {
        console.log(error);
        return res.json({login: false});
    }
});

// 게시글 리스트
app.get("/api/post", async (req, res) => {
    try {
        const postList = await Post.findAll({});
        console.log(postList);
        return res.json({postList});
    } catch(error) {
        console.log(error);
    }
});

// 게시글 작성
app.post("/api/post", upload.single("file"), async (req, res) => {
    try {
        console.log(req.body);
        const {title, content, userId} = req.body;
        console.log(req.fileDir);
        console.log(title, content, userId);

        const post = await Post.create({
            title:title,
            content: content,
            file: req.fileDir,
            user_id: userId
        });
        console.log(post);
        return res.json({upload:true});
    } catch(err) {
        console.log(err);
        return res.json({upload:false});
    }
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));