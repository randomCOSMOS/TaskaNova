import * as mongoose from 'mongoose';

export interface ITask {
  title: string;
  description: string;
  status: string;
}

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});
