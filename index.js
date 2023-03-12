let app=require("./app")
require("dotenv")
let port=process.env.PORT || 4000


require("./db_connecting/db_connect")
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})