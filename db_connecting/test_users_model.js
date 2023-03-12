let mongoose=require("mongoose")
require("dotenv").config()
let user_test_schema= mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

let test_users_model= mongoose.model("users_info_test",user_test_schema)

module.exports=test_users_model