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
const fs=require("fs")
 const input=process.argv
 if (input[2]=='add'){
  fs.writeFileSync(input[3],input[4])

 }else if(input[2]=='remove'){
  fs.unlinkSync(input[3])

 }else{
  console.log("Invalid")
 }

//  (2)add (3) file_name (4)content



 