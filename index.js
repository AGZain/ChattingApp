const express = require("express")
const app = express()

//setting template engine
app.set('view engine', 'ejs')

//middleware
app.use(express.static('public'))   

app.get('/',(req, res) => {
    res.send("Hello World")
})

server = app.listen(3000)