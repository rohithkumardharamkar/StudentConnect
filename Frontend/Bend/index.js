let express=require("express")
let cors=require("cors")
let mongoose=require("mongoose");
const postRouter = require("./routes/post.route");
require('dotenv').config()

var bodyParser = require('body-parser');
const userRoute = require("./routes/user.route");
let app=express()
mongoose.connect(process.env.mongo_url).then((res)=>{ console.log("database connected");}).catch((err)=>{console.log(err);})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/imgs",express.static("./imgs"))
let port=process.env.port || 5000


app.use("/user",userRoute)
app.use("/post",postRouter)
app.listen(port)