const dbConnect=require("./mongodb")

const insertData=async ()=>{
    let db= await dbConnect()
    let insertData= await db.insertMany(
        [
          {deptName:"Software",ename:"Ahad",sal:4000},
          {deptName:"Software",ename:"Hamza",sal:6000},
          {deptName:"Software",ename:"Farooqui",sal:200000}
        ]  
    )
    
    if(insertData.acknowledged){
        console.log("data inserted")
    }
}
insertData()