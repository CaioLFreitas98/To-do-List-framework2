import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './entities/task';
import { TaskService } from './task.service';


@Controller('task')
export class TaskController {

constructor(private taskService: TaskService) {}
    
@Get()
    async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
    }
         
@Get(':id')
    getone(@Param ('id')id: string) {
    return this.taskService.findOne(id);
    }
@Post()
    async create(@Body() Task: Task) {
      this.taskService.create(Task);
    }

@Put(':id')
    update(@Param('id') id: number, @Body() updateTask: Task) {
          this.taskService.update(updateTask, 'id');
    }
@Delete(':id')
    delete(@Param('id') id: string) {
      return this.taskService.remove(id);
    }
}