const express=require("express")
const dbConnect=require("./mongodb")

const app=express()
 // get ApI
app.get("/",async (req,resp)=>{
    let data= await dbConnect()
    let result=await data.find().toArray()
    
    resp.send(result)
})

//post API
app.use(express.json())
//express.json is used to get body using req
app.post("/",async (req,resp)=>{
   let data=await dbConnect()
   let result=await data.insertOne(req.body)
   resp.send(result)

})

app.listen(400)
