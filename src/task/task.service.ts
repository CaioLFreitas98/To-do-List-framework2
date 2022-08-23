import { Inject, Injectable } from '@nestjs/common';
import { Task } from './entities/task';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

private  task: Task[] = [];

constructor(
  @Inject('Task_REPOSITORY')
  private taskRepository: Repository<Task>,
) {}

create(task: Task) {
  this.taskRepository.create(task);
  this.taskRepository.insert(task);
}

async findAll(): Promise<Task[]> {
  return await this.taskRepository.find();
}

async findOne(id: string): Promise<Task> {
  return await this.taskRepository.findOneBy({ id });
}

async remove(id: string) { 
  return await this.taskRepository.delete(id);
}

async update(TaskToUpdate: Task, id: string): Promise<Task> {
  const task = await this.taskRepository.findOneBy({ id });
  const updated = Object.assign(TaskToUpdate, task);

  return await this.taskRepository.save(updated);
}

}