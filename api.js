// const express=require("express")
// const dbConnect=require("./mongodb")
// const mongoDB=require("mongodb")

// const app=express()
// app.use(express.json())
// //express.json is used to get body using req

//  // get ApI
// app.get("/",async (req,resp)=>{
//     let data= await dbConnect()
//     let result=await data.find().toArray()
    
//     resp.send(result)
// })

// //post API
// app.post("/",async (req,resp)=>{
//    let data=await dbConnect()
//    let result=await data.insertOne(req.body)
//    resp.send(result)

// })

// //put API
// app.put("/:name",async(req,resp)=>{  // :name get name from query params
//     let data=await dbConnect()
//     let result=await data.updateOne(
//         {ename:req.params.name},
//         {$set:req.body
//     }
//     )
//     resp.send(result)
    
    
// })
// // delete API
// app.delete("/:id",async (req,resp)=>{
//     let data=await dbConnect()
//     let result=await data.deleteOne({_id:new mongoDB.ObjectId(req.params.id)})
//     resp.send(result)


// })



// app.listen(400)


//practice
//make user API
const express=require("express")
const dbConect=require("./mongodb")
const mongoDB=require("mongodb")


const app=express()

app.use(express.json())

app.post("/",async (req,resp)=>{
    let data=await dbConect()
    let result=await data.insertOne(req.body)
    console.log(req.body)
    resp.send(result)
})
app.listen(600)


//get all user API
app.get("/",async (req,resp)=>{
    let data=await dbConect()
    let result=await data.find().toArray()
    resp.send(result)
})


//update user by ID API
app.put("/:id",async(req,resp)=>{
    let data=await dbConect()
    let result=await data.updateOne(
      
        {_id:new mongoDB.ObjectId(req.params.id)},
        {$set:req.body}
    )
    resp.send(result)
})
const port=6000
app.listen(port,()=>{
    console.log(`server is runing on the port ${port}`)
})