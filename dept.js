const mongoose=require("mongoose")
const deptSchema=new mongoose.Schema({
    deptName:String,
    ename:String,
    sal:Number
},
{collection:'Dept'}
)
const deptModel=mongoose.model("Dept",deptSchema)
module.exports=deptModel

