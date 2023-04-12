import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    console.log('new array: ', this.tasks);
    console.log(this.tasks.length);
    return this.tasks;
  }

  //   getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //     const { status, search } = filterDto;
  //     let tasks = this.getAllTasks();
  //     if (status) {
  //       tasks = tasks.filter((task) => task.status === status);
  //     } else if (search){
  //       tasks = tasks.filter( (task) => {
  //         if(task.description.includes(search) || task.title.includes(search)){
  //           return true
  //         }else {
  //           return false
  //         }})}
  // }}

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.description.includes(search) || task.title.includes(search)) {
          return true;
        } else {
          return false;
        }
      });
    }
    return tasks;
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


    if (!foundTask[0]) {
      throw new NotFoundException(`Task with ID: '${uuid}' not found`)
    }

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
    const taskFound = this.getById(id);
    this.tasks = this.tasks.filter((task: Task) => task.id !== taskFound.id);
    
    console.log('new array: ', this.tasks);
    console.log('amount of tasks: ', this.tasks.length);
  }

  // update task

  updateById(id: string, status: TaskStatus): Task {
    //const taskToUpdateId = this.tasks.findIndex((element) => element.id === id);

    // if(!taskToUpdateId) {
    //   throw new NotFoundException(`There is not a task with ID '${id}' to update.`)
    // }

    // this.tasks[taskToUpdateId].status = status;
    // console.log('updated task: ', this.tasks[taskToUpdateId]);
    // console.log('all the tasks: ', this.tasks);
    // return this.tasks[taskToUpdateId];

    const taskToUpdate = this.getById(id);
    // console.log('tasktoupdate: ', taskToUpdate)
    taskToUpdate.status = status;
    console.log('as updated task looks like: ', taskToUpdate);
    return taskToUpdate
  }
}
