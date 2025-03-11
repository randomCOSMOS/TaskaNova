import mongoose from "mongoose";
const {Schema, model} = mongoose;

interface ITask {
    title: string,
    description: string,
    status: boolean
}

const taskSchema = new Schema<ITask>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true}
});

const Task = model<ITask>("Task", taskSchema);
// export default Task;
export {
    Task
}