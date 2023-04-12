import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsString()
  @IsOptional()
  search?: string;
  
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
