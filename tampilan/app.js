const sock = io()

sock.on("message",createchat)

function createchat (str){
    let body = document.querySelector(".event")
    let h = document.createElement("li")
    h.innerHTML = str
    body.appendChild(h)
}

let form = document.querySelector("#chat-form")


form.addEventListener("submit",(e) => {
    // ini berfungsi kalo seandainya tombol kirim di pencet halam tidak ke refresh
    e.preventDefault()
    const chat = document.querySelector(".chat")
    const text = chat.value
    chat.value = ""
    sock.emit("message",text)
})

createchat("selamat datang di aplikasi sederhana")