const dbConect=require("./mongodb")

const deleteData=async ()=>{
    let db=await dbConect()
    let result=await db.deleteMany({deptName:"AI h"})
    if(result.acknowledged){
        console.log("deleted succesfully")
    }
    

}
deleteData()