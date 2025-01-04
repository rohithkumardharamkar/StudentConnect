let express=require("express")
const { addpost, getpost, liked, disliked, upload, chatai } = require("../controller/pst.controller")


let postRouter=new express.Router()
postRouter.post("/addpost",upload.single("pimg"),addpost)
postRouter.get("/getpost",getpost)
postRouter.post("/like",liked)
postRouter.post("/dislike",disliked);
postRouter.post("/bot",chatai)
module.exports=postRouter;
