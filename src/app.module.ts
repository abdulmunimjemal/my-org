import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentsController } from './departments/departments.controller';
import { DepartmentsService } from './departments/departments.service';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [DepartmentsModule],
  controllers: [AppController, DepartmentsController],
  providers: [AppService, DepartmentsService],
})
export class AppModule {}
