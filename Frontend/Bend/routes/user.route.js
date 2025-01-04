let express=require("express")
const { reg, signin, upload } = require("../controller/user.controller")
let userRoute=new express.Router()

userRoute.post("/reg",upload.single("img"),reg)
userRoute.post("/login",signin)
module.exports=userRoute
