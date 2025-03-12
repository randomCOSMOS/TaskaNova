/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './model/schema/Task.model';

const response = {
  status: "pending",
  message: "",
  data: {}
}

@Injectable()
export class AppService {
  constructor(@InjectModel('Task') private taskModel: Model<ITask>) {}

  async getTasks() {
    return await this.taskModel.find();
  }

  async postTasks(data) {
    const title: string = data.title;
    const description: string = data.description;
    const status: string = data.status;

    const newTask = new this.taskModel({ title, description, status });
    const result = await newTask.save();

    return result;
  }

  async getTasksId(id) {
    const res = await this.taskModel.findById(id);
    response.status = res ? "success" : "error";
    response.message = res ? "Task found!" : "Task not found!";
    response.data = res;
    return response;
  }

  async putTasks(id, data) {
    const title: string = data.title;
    const description: string = data.description;
    const status: string = data.status;
    const res = await this.taskModel.findByIdAndUpdate(id, { title, description, status })
    response.status = res ? "success" : "error";
    response.message = res ? "Task Updated!" : "Could not update task!";
    response.data = res;
    return response;
  }

  async deleteTasks(id) {
    const res = await this.taskModel.findByIdAndDelete(id);
    response.status = res ? "success" : "error";
    response.message = res ? "Task Deleted!" : "Could not delete task!";
    response.data = res;
    return res;
  }
}
