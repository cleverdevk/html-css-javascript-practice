const express = require("express");
const {upload} = require("../utils/multer");
const {Room, Option, Image, sequelize} = require("../models");
const Sequelize = require('sequelize');
const fs = require('fs').promises;
const router = express.Router();
const Op = Sequelize.Op; // 내장 메소드

router.get("/", async (req, res) => {
    try {
        const data = await Room.findAll({
            include:[{model: Option}, {model:Image}],
            where:{
                address:{
                    [Op.like] : `%${req.query.searchKeyword}%`
                }
            }
        });
        console.log(data);
        return res.json({room:data});
        
    } catch (error) {
        console.log(error);
        return res.json({room:false});
    }
});

// vue에서 image request용
router.get("/images", async (req,res) => {
    try {
        const {src} = req.query;
        const file = await fs.readFile(src);

        return res.send(file);
    } catch (error) {
        return res.json({upload:false});
    }
})

router.post('/', upload.array("files"), async (req,res) => {
    const transaction = await sequelize.transaction();
    try {
        // get room information(title, content, address, longitude, latitude, seller_id)
        // get image and dir (multer)
        // get options
        const {title, content, address, latitude, longitude, seller_id, options} = req.body;
        console.log(req.files);
        console.log(req.body);

        const room = await Room.create(
            {
                title,
                content,
                address,
                seller_id,
                longitude,
                latitude
            },{
                transaction: transaction
            }
        );
        
        if(options){
            if(typeof options === "string"){
                await Option.create(
                    {
                        item:options,
                        room_id: room.dataValues.id
                    },
                    {
                        transaction:transaction
                    }
                )
            }else{
                await Promise.all(options.map(async (li) => {
                    return await Option.create({item:li, room_id:room.dataValues.id},{
                        transaction:transaction
                    });
                }))
            }
        }

        if(req.files) {
            await Promise.all(
                req.files.map(async (li) => {
                    await Image.create({
                        src:li.path,
                        room_id: room.dataValues.id
                    },{
                        transaction:transaction
                    })
                })
            )
        }

        await transaction.commit();
        console.log(room);

        return res.json({upload:true});
    } catch (error) {
        console.log(error)
        await transaction.rollback();
        // 에러일 경우 미들웨어를 타고 이미 저장된 파일들을 지워주기
        if(req.files){
            req.files.forEach(li => {
                fs.unlink(li.path, err =>{
                    if(err){
                        console.log(err);
                    }
                })
            })
        }
        return res.json({upload:false});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const data = await Room.findOne({
            include:[{model:Option}, {model:Image}],
            where:{
                id:req.params.id
            }
        });
        return res.json({room:data});
    } catch (error) {
        console.log(error);
        return res.json({room:false});
    }
    
});

router.put("/:id/option", async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const del = await Option.destroy(
            {
                where:{
                    room_id:req.params.id
                }
            },
            {
                transaction:transaction
            }
        );
        console.log(del);
        const {options} = req.query;
        if(options){
            if(typeof options === "string"){
                await Option.create(
                    {
                        item:options,
                        room_id: req.params.id
                    },
                    {
                        transaction:transaction
                    }
                )
            }else{
                await Promise.all(options.map(async (li) => {
                    return await Option.create({item:li, room_id:req.params.id},{
                        transaction:transaction
                    });
                }))
            }
        }
        await transaction.commit();
        return res.json({update:true});
    } catch (error) {
        console.log(erorr);
        await transaction.rollback();
        return res.json({update:false});
    }
})

module.exports = router;

// 이미지 업데이트

// db에서 이미지 전체 삭제
// 파일들 경로 찾아서 삭제
// 새로 이미지 업로드(multer)
// db에 경로 저장