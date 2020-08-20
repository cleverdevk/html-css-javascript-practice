const {nameList} = require("./fileModule");

nameList.then(data => {
    console.log(data.toString().split(","));
}).catch(err=>{
    console.log(err);
})