let usermodel=require("../model/user.model")
let bcrypt=require("bcryptjs")
let multer=require("multer")
let jwt=require("jsonwebtoken")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './imgs')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })


let reg=async(req,res)=>
{
    try{
        
        console.log(req.body);
        let obj=await usermodel.findById({"_id":req.body._id})
        
        if(obj)
        {
            res.send({"msg":"Account already exists"})
        }
        else
        {            
            let hashcode=await bcrypt.hash(req.body.pwd,10)
            let data=await new usermodel({...req.body,"pwd":hashcode,"img":req.file.filename})//
            await data.save();
            res.json({"msg":"Account created"})
        }

    }
    catch(err)
    {
        res.json({"msg":"Internal server error 404"})

        console.log(err);
    }

}
let signin=async(req,res)=>
{
    console.log(req.body);
    
    try{
        let obj=await usermodel.findById({"_id":req.body._id})
        if(obj)
        {
            let a=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(a)
            {
                res.json({"token":jwt.sign({"_id":obj._id},"rohith"),"_id":obj._id,"name":obj.name,"mobile":obj.mobile,"age":obj.age,"gender":obj.gender,"img":obj.img})
            }
            else
            {
                res.json({"msg":"Check password"})
            }
        }
        else
        {
            res.json({"msg":"invalid login credentials"})
        }
       

    }
    catch(err)
    {
        res.json({"msg":"Internal server error 404"})
        console.log(err);
    }

}

module.exports={reg,upload,signin}