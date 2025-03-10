// import mongoose from "mongoose";
const mongoose = require("mongoose");
// import * as readline from "readline";
const readline = require("readline");
// import Task from "../model/Task.js";
const {Task} = require("./model/Task.js");
// import "dotenv/config";
require("dotenv").config();
// import { resolve } from "path";

let rl = readline.createInterface(process.stdin, process.stdout);
mongoose.connect("mongodb+srv://randomcosmos:BQNVgtp3100&**@versal.dpref.mongodb.net/test001?retryWrites=true&w=majority&appName=Versal");

const run = async () => {
while(true){
    console.log("Idle...")
    let cmd = await new Promise(resolve => rl.question("Enter 1 to insert data?", resolve))
    if(cmd == 1){
        let title = await new Promise(resolve => rl.question("Give title:", resolve));
        let desc = await new Promise(resolve => rl.question("Give description:", resolve));
        let status = await new Promise(resolve => rl.question("Give status", resolve) === "true");
        let notes = await new Promise(resolve => rl.question("Any additional notes?", resolve));

        let task = new Task({
            title: title,
            description: desc,
            status: status,
            notes: notes
        })

        console.log("Adding....");
        await task.save();
        console.log("Added!");
    } else {
        break;
    }
}


const firstArticle = await Task.findOne({});
console.log(firstArticle);
mongoose.disconnect();
}

console.log("Sup");
let a:number = 6;
a = 8;
console.log(a);


run();