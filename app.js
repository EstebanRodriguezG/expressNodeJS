const express = require('express')
const app = express()
const port = 3000 // puerto localhost 3000

// localhost:3000
app.get("/", (req, res) =>{

    res.send("Hola Explorers!");
})

// localhost:3000/launchx
app.get("/launchx", (req, res) =>{

    res.send("Bienvenidos a LaunchX!");
})

app.listen(port, ()=>{

    console.log("Server Listo!")

})