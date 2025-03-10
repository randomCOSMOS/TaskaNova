import mongoose from "mongoose";
import Task from "./model/Task.js";
import DevNote from "./model/DevNote.js";
import "dotenv/config";

mongoose.connect("mongodb+srv://randomcosmos:BQNVgtp3100&**@versal.dpref.mongodb.net/test001?retryWrites=true&w=majority&appName=Versal");

const task = new Task({
    title: "Complete the ReFeed assessment",
    description: "Complete the task give for the Callus International Program for ReFeed internship!!",
    status: false,
    notes: "Deadline: 13 March 4pm"
})

const note = new DevNote({
    note: "Just a guy working!",
    yourMumsNumber: 3876482376423
});

await task.save();
await note.save();

const firstArticle = await Task.findOne({});
console.log(firstArticle);