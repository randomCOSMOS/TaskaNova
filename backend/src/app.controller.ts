/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Param, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { taskDto } from './model/dto/task.dto';

@Controller('/tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks() {
    return this.appService.getTasks();
  }

  @Post()
  postTasks(@Body(new ValidationPipe) data: taskDto){
    return this.appService.postTasks(data);
  }

  @Get(':id')
  getTasksId(@Param('id') id: string) {
    return this.appService.getTasksId(id);
  }

  @Put(':id')
  putTasks(@Param('id') id: string, @Body(new ValidationPipe) data: taskDto) {
    return this.appService.putTasks(id, data);
  }

  @Delete(':id')
  deleteTasks(@Param('id') id: string) {
    return this.appService.deleteTasks(id);
  }
}
