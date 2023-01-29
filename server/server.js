const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000
require("dotenv").config()
const cookieParser = require("cookie-parser")
require("./config/mongoose.config")

app.use(cookieParser())
app.use(express.json(), express.urlencoded({extended:true}))
app.use(cors({credentials:true, origin:"http://localhost:3000"}))


const AllMyUserRoutes = require("")
AllMyUserRoutes(app)

const AllMyDogRoutes = require("./routes/dog.routes")
AllMyDogRoutes(app)

const AllMyPostRoutes = require("")
AllMyPostRoutes(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))