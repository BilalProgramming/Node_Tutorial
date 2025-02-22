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
    // http is module which handle request and response of server
 const http=require('http')
  
 http.createServer( (req,resp)=>{
  resp.write("Hi Bilal.......")
  resp.end()
 }
 ).listen(1000)

 