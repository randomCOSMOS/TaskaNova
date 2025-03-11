import mongoose from "mongoose";
import {Task} from "./model/Task.js";
import "dotenv/config";

const run = async () => {
    await mongoose.connect(process.env.CONNECTION_STRING);

    let task = new Task({
        title: "chill",
        description: "We are just cruising.",
        status: false
    })

    console.log("Adding....");
    await task.save();
    console.log("Added!");


    const firstArticle = await Task.findOne({});
    console.log(firstArticle);
    mongoose.disconnect();
}

run();
