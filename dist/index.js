"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require("mongoose");
const readline = require("readline");
const { Task } = require("./model/Task.js");
require("dotenv").config();
let rl = readline.createInterface(process.stdin, process.stdout);
mongoose.connect("mongodb+srv://randomcosmos:BQNVgtp3100&**@versal.dpref.mongodb.net/test001?retryWrites=true&w=majority&appName=Versal");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    while (true) {
        console.log("Idle...");
        let cmd = yield new Promise(resolve => rl.question("Enter 1 to insert data?", resolve));
        if (cmd == 1) {
            let title = yield new Promise(resolve => rl.question("Give title:", resolve));
            let desc = yield new Promise(resolve => rl.question("Give description:", resolve));
            let status = yield new Promise(resolve => rl.question("Give status", resolve) === "true");
            let notes = yield new Promise(resolve => rl.question("Any additional notes?", resolve));
            let task = new Task({
                title: title,
                description: desc,
                status: status,
                notes: notes
            });
            console.log("Adding....");
            yield task.save();
            console.log("Added!");
        }
        else {
            break;
        }
    }
    const firstArticle = yield Task.findOne({});
    console.log(firstArticle);
    mongoose.disconnect();
});
console.log("Sup");
let a = 6;
a = 8;
console.log(a);
run();
