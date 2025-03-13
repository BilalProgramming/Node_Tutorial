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
const dbConect=require("./mongodb")
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

