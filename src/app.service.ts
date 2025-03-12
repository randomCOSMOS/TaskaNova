import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from './model/schema/Task.model';

@Injectable()
export class AppService {
  constructor(@InjectModel('Task') private taskModel: Model<ITask>) {}

  getTasks() {
    return {
      bitch: 'boi',
      balls: 'deep',
    };
  }

  async postTasks(data) {
    const title: string = data.title;
    const description: string = data.description;
    const status = data.status;

    const newTask = new this.taskModel({ title, description, status });
    const result = await newTask.save();
    console.log(result);

    return 'Success in the POST request!';
  }

  getTasksId(id): string {
    return `Got a GET request with ID: ${id}`;
  }

  putTasksId(id): string {
    return `Got a PUT request with ID: ${id}`;
  }

  deleteTasksId(id): string {
    return `Got a DELETE request with ID: ${id}`;
  }
}
