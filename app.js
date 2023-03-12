let express=require("express")
let app=express()
let cors=require("cors")

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let users_model=require("./db_connecting/test_users_model")



// getting all data
app.get("/users",async(req,res)=>{
    try {
        
        let alldata= await users_model.find()
        res.status(202).json(alldata)

    } catch (error) {
        rs.status(404).json(error)
    }
})



// create data
app.post("/users",async(req,res)=>{
   try {
    
    let newData= users_model({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    await newData.save()
    res.status(202).json(newData)

   } catch (error) {
    res.status(404).json({msg:"something is wrong"})
   }
})


// deleting data 
app.delete("/users/:id",async(req,res)=>{
try {
    
    let id= req.params.id
    let deletedUser=await users_model.findByIdAndDelete({_id:id})
    res.status(202).json(deletedUser)
    
} catch (error) {
    res.status(404).json({msg:"cannot delete"})
}
})



// updating users
app.put("/users/:id",async(req,res)=>{
    try {
        
        let id=req.params.id
        let updatedUser= await users_model.findByIdAndUpdate(
            {
                _id:id
            },
            {
                $set:{
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                }
            },
            {
                new:true
            }
        )
        res.status(202).json(updatedUser)

    } catch (error) {
        res.status(404).json("can not updated")
    }
})



module.exports=app