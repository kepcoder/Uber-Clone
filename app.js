const dotenv = require('dotenv')
dotenv.config();
const express = require("express")
const userRoutes = require('./routes/user.routes')
const cors = require('cors')
const connectToDb = require('./db/db')
const app = express();
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', function(req, res){
    res.send("chal raha  hain") 
})
app.use('/users', userRoutes)



module.exports = app;