import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'thekillers',
      password: 'postgres',
      database: 'task',
      autoLoadEntities: true,
      synchronize: true,
    
    })],
})
export class AppModule {}