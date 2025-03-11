import mongoose from "mongoose";
import {Task} from "./model/Task.js";
import "dotenv/config";

const run = async () => {
    await mongoose.connect("mongodb+srv://randomcosmos:BQNVgtp3100&**@versal.dpref.mongodb.net/test001?retryWrites=true&w=majority&appName=Versal");

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