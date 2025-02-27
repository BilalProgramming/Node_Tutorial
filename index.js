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




 