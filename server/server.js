const http = require("http")
const express = require("express")
const app = express()
const server = http.createServer(app)
const socketio = require("socket.io") 

const lokasiTampilan = `${__dirname}/../tampilan`
const io = socketio(server)
// ssamaf25.

app.use(express.static(lokasiTampilan))

io.on("connection", (sock) => {
    // emit itu mengirim ke client
    sock.emit("message", "Hi, kamu sudah terhubung")
    console.log("someone conected")
    // on itu menerima dari client
    sock.on("message",(text) => {
        // io itu secara global(orang yang onlien) sedangkan sock itu secara personal(tampilanpadalayar client)
        io.emit("message", text)
    })
})

server.on("error",err => {
    console.log("Serever error",err)
})

server.listen(8080,() => {
    console.log(`game start di ${lokasiTampilan}`)
})