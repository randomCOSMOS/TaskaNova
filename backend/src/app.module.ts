import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskSchema } from './model/schema/Task.model';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
