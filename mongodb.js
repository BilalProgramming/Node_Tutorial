const {MongoClient}=require("mongodb")
const url='mongodb://localhost:27017'
const client=new MongoClient(url)
const database='Google'

async function dbConect(){
  let connect=await client.connect()
   let db= connect.db(database )
   return db.collection("User")


}
module.exports=dbConect