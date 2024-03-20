import { Module } from '@nestjs/common';
import { DepartmentsController } from './departments/departments.controller';
import { DepartmentsService } from './departments/departments.service';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [DepartmentsModule],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class AppModule {}
