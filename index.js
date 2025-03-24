// // =====Normal Function
// function test(a){
//   return a*10
// }
// //===== Arrow Function
// const test=(a)=> a*10




//======= for loop and if-else in js=======
// for (i=0;i<10;i++){
//     if(i%2===0){
//         console.log(i," is Even")

//     }

// } 

// ========arr in js============
//   const arr=[12,35,67,8,43]
//   len=arr.length
//   for(i=0;i<len;i++){
//     console.log(i)
//   }  

// ========filter in js============
// let arr=[3,20,100,45]
// filter=arr.filter((n)=> n>10)
// console.log(filter)


//==== import something fron another file=======
//  const app=require("./app")
// console.log(app)

//===Modules===========  the feautures that programming language provides like console.log in js

// const fs=require("fs").writeFileSync // instead of all fs used only those needed
// fs("hello3.txt","Hi iam new file")         
// console.log(__dirname)    
// console.log(__filename)       

//================  Make server in node js==================

//  const http=require('http')  // http is module which handle request and response of server

//  http.createServer( (req,resp)=>{
//   resp.write("Hi Bilal.......")
//   resp.end()
//  }
//  ).listen(1000)


//===== used packages

// import color from'colors'
// console.log("package.json".green)

// import chalk from 'chalk';
// console.log(chalk.red('Hello world!'));
// console.log("Node js tutorial...")


//================= Make API============================================
//  const http=require('http') // http is mudule 
//  const data=require('./data')
//  http.createServer((req,resp)=>{
//   resp.writeHead(200,{'Content-Type':'application\json'})// header also tell data is json formal
//   resp.write(JSON.stringify( data))//body
//   resp.end()

//  }).listen(2000)



//====================  take input from command line====================
// process is an object
// const fs=require("fs")
//  const input=process.argv
//  if (input[2]=='add'){
//   fs.writeFileSync(input[3],input[4])

//  }else if(input[2]=='remove'){
//   fs.unlinkSync(input[3])

//  }
//  else{
//   console.log("Invalid input")
//  }


// ======display file list from folder=======================
// const fs=require("fs")
// const path=require('path')
// const pathDir=path.join(__dirname,'folder')
// for(i=0;i<5;i++){
//   fs.writeFileSync(pathDir+"/bilal"+i+".txt",'Hi Bilal, what are you doing')

// }


//==========   display all files of folder=======
// fs.readdir(pathDir,(error,files)=>{
//   files.forEach((data)=>{
//     console.log(data)

//   })


// })
//==================crud operation on file=================
// const fs=require("fs")  
// const path=require("path")
// const pathDir=path.join(__dirname,'crud')
// const filePath=`${pathDir}/bilal.txt`
// fs.writeFileSync(filePath,"I am cs student with specializzation in AI.....") // ===create file within folder====


// fs.readFile(filePath,'utf8',(error,data)=>{  // ====read file====
//   console.log(data)
// })


// fs.appendFile(filePath,'and i am part time teacher',(err)=>{ // ======  modified(append)  files
//   if(!err){
//     console.log('file is updated')
//   }
//  }
//  )


// fs.rename(filePath,`${pathDir}/hi.txt`,(err)=>{ //========rename file
//   if(!err){
//     console.log("file is renamed")
//   }
// })


//===== delete file
// fs.unlinkSync(`${pathDir}/hi.txt`)
// a=10
// b=0
// console.log("hi")

//========== draw back of asynchronous language======
// a=10
// b=0
// setTimeout(()=>{
//   b=10
// },2000) 
// console.log(a+b) 

//===  resolve above problems usin promise==========

// a=10
// b=0
// let waitingData=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(30)
//   },2000)
// })
//  waitingData.then((data)=>{
// b=data
// console.log(a+b) })


//============ express  js ( make web pages using express)===============
// const express=require("express")
// const app=express() // make it executable state
//  //  route page
// app.get('',(req,resp)=>{   // get is method which   provides routes
//   console.log("data sent by browser",req.query.name)
//   resp.send("Welcome "+  req.query.name)


// })  

// // contact page
// app.get('/contact',(req,resp)=>{
//   resp.send("<h2> Welcome user Contact Page</h2><br><p>Contact:03112061159</p>")

// })

// // about page
// app.get("/About",(req,resp)=>{
//   resp.send("<h1>About Us</h1><br><p>My name Is Bilal . I am web developer with cs degree and specialization in AI</p>")
// })

// app.listen(200)


// //=== render html and json================
// const express=require("express")
// const app=express()
// app.get('',(req,resp)=>{
//   resp.send(`
//     <h1>Welcome To home Page</h1><br>
//     <input type="text" placeholder="userName"value=${req.query.name} /><br>
//     <button>Submit</button><br><br>
//     <a href="/about">Go to About us page </a> <br>
//     <a href="./details">Go To details page</a>
//    ` )})

// app.get('/about',(req,resp)=>{
//   resp.send(`
//     <h2>Welcome To About us Page</h2>
//       <a href="/">Go to Home us page </a> <br>
//     <a href="./details">Go To details page</a>
//     `
//   )
// })  
// app.listen(200)

// app.get("/details",(req,resp)=>{
//   resp.send( [
//     {
//     name:"Bilal",
//     email:"Bilal123@gmail.com"
//   },
//   {
//     name:"usman",
//     email:"usman123@gmail.com"
//   }
// ])})

//==  Make first html page 
// const express=require("express")
// const path=require("path")
// const app=express()

// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath))// function of express(middleware)
// app.listen(4000)

//============ Remove extension and make 4040 page=========

// const express=require("express")
// const path=require("path")
// const app=express()

// const publicPath=path.join(__dirname,'public')
// app.get('',(_,resp)=>{
//   resp.sendFile(`${publicPath}/index.html`)

// })

// app.get('/about',(req,resp)=>{
//   resp.sendFile(`${publicPath}/about.html`)
// })

// app.get("/Contact",(req,resp)=>{
//   resp.sendFile(`${publicPath}/contact.html`)
// })
// app.get('*',(req,resp)=>{
//   resp.sendFile(`${publicPath}/nopage.html`)
// })
// app.listen(5000)


//=========  template engine is used for dynamic page====
// const express=require("express")
// const app=express()

// // used ejs template engine
// app.set('view engine','ejs') 

// app.get("/profile",(req,resp)=>{
//   const user={
//     name:"Bilal",
//     email:"bil@l123",
//     profession:"web developer",
//     skills:["c/C++","Python","js","Node js","oracle","mongo"]
//   }
//   resp.render('profile',{user}) 
// })
// app.get("/login",(req,resp)=>{
//   resp.render('login')
// })
// app.listen(200)



// ==middleware=== is used with routes,through this we can access request,response and modify them
// it is used for authenication

// const express=require("express")
// const app=express() 
// // make middleware func
// const reqFilter=(req,resp,next)=>{
//    if(!req.query.age){
//     resp.send("<h2>Please provide age</h2>")

//    }
//   else if(req.query.age<18){
//     resp.send(" <h2>You cannot acces this page</h2>")
//   }
//   else{
//     next()
//   }

// }
// app.use(reqFilter) // apply middleware globally called application level middleware

// app.get("/",(req,resp)=>{
//   resp.send("<h2>Welcome to home page</h2> ")

// })

// app.get("/profile",(req,resp)=>{
//   resp.send("<h2>Profile Page</h2>")
// })

// app.listen(300)

//======route level middleware========

// const express=require("express")
// const app=express()
// const reqFilter=require("./middleware")

// const route=express.Router()

// route.use(reqFilter)


// route.get("/",(req,resp)=>{
//   resp.send("<h2>Welcome to Home page</h2>")
// })

// app.get("/about",(req,resp)=>{
//   resp.send("<h2>About us page</h2>")
// })

// route.get("/contact",(req,resp)=>{
//   resp.send("<h2>contact page</h2>")
// })
// app.use('/',route)
// app.listen(300)

//=============== connect Node with Mongo===============
// const {MongoClient}=require("mongodb")
// const url='mongodb://localhost:27017' // works only for local
// const client= new MongoClient(url) 
// const database='Google'

// async function getData(){
//   let result=await client.connect() // client return promise. and e await keyword is used to pause the execution of an asynchronous function until a Promise is resolved or rejected.
//   let db= result.db( database) // databse name
//  let collection= db.collection('Emp')  //collection name
//  let response=await collection.find().toArray()
//  console.log(response)
// }

// getData()


// db conncect with separate files
//const dbConect=require("./mongodb")
//handle promise
// dbConect().then((resp)=>{
//   console.log(resp.find().toArray().then((data)=>{
//     console.log(data)
//   }))

// })

//async await for promise handling
// const getdata=async ()=>{
//   let data=await dbConect()
//   let resp=await data.find().toArray()
//   console.log(resp)

// }
// getdata()

// connect node with mongo using Mongoose(is a package which connect node with mongo db)

// const mongoose=require("mongoose")
// const main=async ()=>{
//  await mongoose.connect("mongodb://localhost:27017/Google")//url 

//  const productSchema= new mongoose.Schema({//schema of table
//   deptName:String,
//   ename:String
//  },
//  {collection:"Dept"}
// );
//  const productModel= mongoose.model("Dept",productSchema)// by default convet Dept into plural
//  let data=new productModel({deptName:"commerce",ename:"khalid"})
//  let result=await data.save()
//  console.log(result)

// }
// main()

// ===CRUD--WITH--MONGOOSE===

// const mongoose=require("mongoose") 
//   mongoose.connect("mongodb://localhost:27017/Google")

// const deptSchema=new mongoose.Schema( // define schema
//   {
//     deptName:String,
//     ename:String,
//     sal:Number
//   },
//   {collection:"Dept"}
// )

// const saveInDb=async ()=>{  //  SAVE IN DB

// const deptModel=mongoose.model('Dept',deptSchema)
// const  data=new deptModel({
//   deptName:"Datascince",
//   ename:"Mubashir",
//   sal:10000
// })
// let result=await data.save()
// console.log(result)
// }

// const updateInDb=async ()=>{ //UPDATE IN DB
//  const deptModel= mongoose.model("Dept",deptSchema)
//  const data=await deptModel.updateOne(
//   {ename:"shafiqa"},
//   {
//     $set:{ename:"shafiqa iqbal",sal:50000}
// }
//  )
//  console.log(data)

// }

// const deleteInDB=async()=>{ //delete in db
//   const deptModel=mongoose.model("Dept",deptSchema)
//   const data=await deptModel.deleteMany({ename:"hasmi"})
//   console.log(data)
// }

// const findInDb=async()=>{
//   const deptModel=mongoose.model("Dept",deptSchema)
//   const result=await deptModel.find({ename:"Maaz"})
//   console.log(result)

// }
// findInDb()


// POST API WITH MONGOOSE
// const express = require("express")
// require("./config")
// const deptModel = require("./dept")

// const app = express()
// app.use(express.json())

// app.post("/create", async (req, resp) => {
//   let data = new deptModel(req.body)
//   let result = await data.save()
//   console.log(result)
//   resp.send(result)
// })

// //PUT API WITH MONGOOSE
// app.put("/create/:_id", async (req, resp) => {
//   let data = await deptModel.updateOne(
//     req.params,
//     {
//       $set: req.body
//     }
//   )

//   resp.send(data)
// })

// //GET API  WITH MONGOOSE
// app.get("/create", async (req, resp) => {
//   const data = await deptModel.find({ ename: "Bilal" })
//   console.log(data)
//   resp.send(data)
// })

// //DELETE API (using _ID in query param) WITH MONGOOSE
// app.delete("/delete/:_id", async (req, resp) => {
//   let data = await deptModel.deleteOne(req.params)
//   console.log(req.params)
//   resp.send(data)
// })

// app.listen(4000)

//====SEARCH API=======
// const express=require("express")
// require("./config")
// const deptModel=require("./dept")

// const app=express()

// app.get("/search/:key",async (req,resp)=>{
//   const data=await deptModel.find( //used regex for search
//     {
//       "$or":[
//         {"ename":{$regex:req.params.key}},
//         {"deptName":{$regex:req.params.key}}
//       ]
//     }
//   )
//   console.log(data)
//   resp.send(data)
// })
// app.listen(5000)

//==UPLOAD FILE USING API(MULTER)=====
// const express = require("express")
// const multer = require("multer")
// const app = express()

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "public")// where to upload file
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".txt")


//     }

//   })

// }).single("user_file")

// app.post("/upload",upload, (req, resp) => {
//   resp.send("file uploaded.")
// })
// app.listen(6000)

//OS Modules
// const os=require('os')
// console.log(os.freemem()/(1024*1024*1024))  // free ram in system
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())
// console.log(os.arch())

//===event and event emitter==
// const express=require("express")
// const EventEmitter=require("events") //Import EventEmitter
// const app=express()
// const event=new EventEmitter() //make object of eventemitter

// let count=0
// //handle event
// event.on("countApi",()=>{
//   count++
//   console.log(count,"event called")
// })
// app.get("/",(req,resp)=>{
//   resp.send(" api called")
//   event.emit("countApi") //generate event
// })

// app.get("/search",(req,resp)=>{
//   resp.send("search api called")
//   event.emit("countApi")
// })

// app.get("/update",(req,resp)=>{
//   resp.send("updated api called")
//   event.emit("countApi")
// })
// app.listen(5000)

// ===CONNECT WITH MYSQL=======
// const mysql = require("mysql")

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "testdb"
// })
// con.connect((err) => {   // check connect with my sql or not
//   if (!err) {
//     console.log("connect with mysql")
//   }
//   else {
//     console.log("error")
//   }
// })

// con.query("select * from emp", (err, data) => {  //run query
//   if (!err) {
//     console.log(data)
//   }

// })


// GET API WITH MYSQL
// const express=require("express")
// const connectdb=require("./connMysql")
// const { error } = require("simple-logs")
// const app=express()
// app.use(express.json())


// app.get("/", (req,resp)=>{
//   const data=connectdb.query("select * from emp",(err,data)=>{
//     if(!err){
//     resp.send(data)
//     }
//     else{
//       resp.send("error")
//     }
//   }) 
// })

// //POST API MY SQL

// app.post("/",(req,resp)=>{
//   connectdb.query("insert into emp set ?",req.body,(err,result,fields)=>{
//     if(err) throw error //throw error
//     else{
//       resp.send(result)
//     }
//   })


// })

// //PUT API MY SQL

// app.put("/:id",(req,resp)=>{
//   const data=[req.body.ename,req.body.deptid,req.params.id]
//  const result= connectdb.query("update emp set ename= ?,deptid=? where id=?",data,(err,result,fields)=>{
//     if (err) throw error
//     else{
//       resp.send(result)
//     }
//   })
// })

// app.delete("/:id",(req,resp)=>{
//   connectdb.query("delete from emp where id = ?",req.params.id,(err,result)=>{
//     if(err) throw error
//     else{
//       resp.send(result)

//     }

//   })

// })
// app.listen(4000)


//PRACTICE

const express = require("express")
const dbConect = require("./connMysql")
const { error } = require("simple-logs")
const app = express()
app.use(express.json())
//get api for  Fetch all employees.
app.get("/", (req, resp) => {
  dbConect.query("select * from emp", (err, result) => {
    if (err) throw error
    else {
      resp.status(200).send({ status: 'success', data: result });    }

  })

})

//get api for  Fetch employee by their id.
app.get("/searchById/:id", (req, resp) => {
  dbConect.query("select * from emp where id = ?", req.params.id, (err, result) => {
    if (err) throw error
    else {
      resp.send(result)
    }

  })

})
//post api for add new emp
app.post("/addEmp", (req, resp) => {

  dbConect.query("insert into emp set ?",req.body,(err,result,fields)=>{
    if(err) throw error
    else{
      resp.send(result)
    }
  })

})

//put api(update emp by their id)
app.put("/update/:id",(req,resp)=>{
  const emp=[req.body.salary,req.body.name,req.params.id]
  dbConect.query("UPDATE EMP SET salary =?,name =? WHERE id=?",emp,(err,result)=>{
    if(err ) throw error
    else{
      resp.send(result)
    }
  })

})  

//delete api  Delete an employee by their id.
app.delete("/delete/:id",(req,resp)=>{
  dbConect.query("delete from emp where id=?",req.params.id,(err,result)=>{
    if(err) throw error
    else{
      resp.send(result)
    }
  })
})
app.listen(5000)