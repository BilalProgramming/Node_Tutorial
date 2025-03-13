const dbConect=require("./mongodb")

const update=async ()=>{
    let db=await dbConect()
   let result= await db.updateMany(
        {deptName:"ML"},//condition
        {$set:{sal:30000,deptName:"AI"}}
    )
  console.log(result)
}
update()