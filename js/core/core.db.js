import { connect } from "mongoose"
import { MONGODB_URI } from "./core.secrets.js"

export default async function connectDB(){
    try {
        const mongooseInstance = await connect(MONGODB_URI)
        return {
            instance:mongooseInstance,
            message:"Mongo DB Connected Successfully"
        }
    } catch (error) {
        throw error
    }
}