const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/views`));

app.get("/", (req, res) => {
    res.render("index");
});

// io.on("connection", (socket) => {
//     console.log("연결되었습니다.");
//     socket.on("chat message", msg =>{
//         console.log(msg);
//         io.emit("chat message", msg);
//     });
// });

// namespace 활용

const chatRoom = io.of("/chat-room");
chatRoom.on('connection', (socket) => {
    console.log("연결되었습니다.");
    socket.on("chat message", msg =>{
        console.log(msg);
        chatRoom.emit("chat message", msg);
    });
})

http.listen(9000, () => console.log("connect at 9000"));