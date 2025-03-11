"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Task_js_1 = require("./model/Task.js");
require("dotenv/config");
const run = async () => {
    await mongoose_1.default.connect("mongodb+srv://randomcosmos:BQNVgtp3100&**@versal.dpref.mongodb.net/test001?retryWrites=true&w=majority&appName=Versal");
    let task = new Task_js_1.Task({
        title: "chill",
        description: "We are jusr cruising.",
        status: false
    });
    console.log("Adding....");
    await task.save();
    console.log("Added!");
    const firstArticle = await Task_js_1.Task.findOne({});
    console.log(firstArticle);
    mongoose_1.default.disconnect();
};
run();
//# sourceMappingURL=index.js.map