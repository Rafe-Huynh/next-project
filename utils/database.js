import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
}

if(isConnected){
    console.log('connected')
}
try {
   await mongoose.connect(process.env.URI, {
    dbName: "share_prompt"
   })
   isConnected = true;
   console.log("mongoose connected")
} catch (error) {
    console.log(error)
}