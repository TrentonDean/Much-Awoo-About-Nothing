const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 8000


require("./config/mongoose.config")
app.use(express.json(), express.urlencoded({extended:true}))
app.use(cors())


const AllMyUserRoutes = require("")
AllMyUserRoutes(app)

const AllMyPostRoutes = require("")
AllMyPostRoutes(app)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))