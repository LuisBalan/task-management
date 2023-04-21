import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-149.railway.app',
      port: 5906,
      username: 'postgres',
      password: 'SfQxNcnaU9ycudz4rYsc',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    
    })],
})
export class AppModule {}