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


app.get('/explorers/:explorer',(req, res) =>{

    console.log(req.params)
    res.send(req.params)
})


app.get('/node', (req, res)=>{

    const explorer1 = {id: "1", name: "Esteban", lastname: "Rodriguez"}
    const explorer2 = {id: "2", name: "Jose", lastname: "Gomez"}
    const explorer3 = {id: "3", name: "Diana", lastname: "Gonzalez"}

    res.send([explorer1, explorer2, explorer3])

})

app.listen(port, ()=>{

    console.log("Server Listo!")

})