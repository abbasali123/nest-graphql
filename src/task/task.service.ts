import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  create(createTaskInput: CreateTaskInput) {
    const newTask = this.taskRepository.create(createTaskInput);
    return this.taskRepository.save(newTask);
  }

  findAll() {
    return this.taskRepository.find({
      relations: ['user'],
    });
  }

  findOne(id: string) {
    return this.taskRepository.findOne(
      { id },
      {
        relations: ['user'],
      },
    );
  }

  update(id: string, updateTaskInput: UpdateTaskInput) {
    return this.taskRepository.save({
      id,
      ...updateTaskInput,
    });
  }

  remove(id: string) {
    return this.taskRepository.delete(id);
  }
}
