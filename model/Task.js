import mongoose from "mongoose";
const {Schema, model} = mongoose;

const taskSchema = new Schema({
    title: String,
    description: String,
    status: Boolean,
    notes: String
});

const Task = model("Task", taskSchema);
export default Task;