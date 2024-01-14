import mongoose,{ Schema } from "mongoose"

const taskSchema =new Schema({
    id : String,
    title : String,
    date : Date,
    description : String,
    remarks : String
}) 

export const TaskModel = mongoose.model('Task', taskSchema);