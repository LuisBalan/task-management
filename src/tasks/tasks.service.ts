import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    console.log('new array: ', this.tasks);
    console.log(this.tasks.length);
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
    console.log('new array: ', this.tasks);
    console.log('amount of items: ', this.tasks.length);
    return task;
  }

  getById(uuid: string): Task {
    const foundTask = this.tasks.filter((task: Task) => task.id === uuid);
    console.log(foundTask[0]);
    return foundTask[0];
  }

  // deleteById(id: string): void {
  //   // const elementToDeleteId = (task: Task) => task.id === id;
  //   const indexToDelete = this.tasks.findIndex((task: Task) => task.id === id);
  //   try {
  //     this.tasks = this.tasks.splice(indexToDelete, 1);
  //     console.log('new array: ', this.tasks);
  //     console.log(this.tasks.length);
  //     // console.log('new array', newArray);
  //     // return newArray;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  removeById(id: string): void {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    console.log('new array: ', this.tasks);
    console.log('amount of tasks: ', this.tasks.length);
  }
}
