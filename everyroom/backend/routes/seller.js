const express = require("express");
const router = express.Router();

const {Seller} = require('../models/');

const {comparePassword,hashPassword} = require('../utils/bcrypt');

// sign up
router.post("/", async (req, res) => {
    try{
        const {email, password, name} = req.body;
        if(email && password && name){
            const hashedPassword = await hashPassword(password);
            const data = await Seller.create({
                email:email,
                password:hashedPassword,
                name:name
            });
            return res.json({signup:true});
        }
    }catch(error){
        console.log(err);
        return res.json({signup:false});
    }
});

router.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        const userData = await Seller.findOne({
            where:{
                email:email
            }
        });
        console.log(userData);
        const hashedPassword = userData.dataValues.password;
        const compareResult = await comparePassword(password, hashedPassword);
        if(comparePassword){
            // 일반 유저일 경우 auth 3 판매자는 2
            return res.json({
                login:true, 
                id:userData.dataValues.id, 
                name:userData.dataValues.name,
                auth:2
            });
        } else {
            throw new Error();
        }
    } catch (error) {
        console.log(error);
        return res.json({login: false});
    }
})

module.exports = router;