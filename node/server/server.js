const http = require("http");
const fs = require("fs").promises;

const server = http.createServer( async (req,res) => {
    try{
        // Routing
        if(req.method === "GET"){
            if(req.url === "/"){
                const data = await fs.readFile("./pages/index.html");
                return res.end(data);
            }else if(req.url === "/login"){
                const data = await fs.readFile("./pages/login.html");
                return res.end(data);
            }else if(req.url === "/signup"){
                const data = await fs.readFile("./pages/signup.html");
                return res.end(data);
            }
        }
    }catch(err){
        console.log(err);
    }
});

server.listen(8000, ()=>{
    console.log("this server listening on 8000");
})