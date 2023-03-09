import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseUUIDPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:uuid')
  findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string): Task {
    return this.tasksService.getById(uuid);
  }

  // First approach using Body decorator as a param into createTask handler. This methods allows injecting properties distinct from task interface.

  // @Post()
  // createTask(@Body() body) {
  //   console.log('body: ', body);
  // }

  //Second approach using decorators for each property

  // @Post()
  // createTask(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Task {
  //   return this.tasksService.createTask(title, description);
  // }

  // Post handler using DTO
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  // first delete approach

  // @Delete('/:uuid')
  // deleteById(@Param('uuid', new ParseUUIDPipe()) uuid: string): void {
  //   this.tasksService.deleteById(uuid);
  //   // console.log(this.task)
  // }

  // second delete
  @Delete('/:uuid')
  removeById(@Param('uuid', new ParseUUIDPipe()) uuid: string): void {
    this.tasksService.removeById(uuid);
  }

  // Update a task by Id
  @Patch('/:id/status')
  updateById(@Param('id') id: string, @Body('status') status: TaskStatus) {
    return this.tasksService.updateById(id, status);
  }
}
