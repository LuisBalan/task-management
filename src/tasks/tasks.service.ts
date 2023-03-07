import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getById(uuid: string): Task {
    const foundTask = this.tasks.filter((task: Task) => task.id === uuid);
    return foundTask[0];
  }


  //repair
  deleteById(id: string): Task[] {
    const matchId = (task: Task) => task.id === id;
    const idToDelete = this.tasks.findIndex(matchId);
    return this.tasks.splice(idToDelete, 1);
  }
}
