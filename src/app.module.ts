/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AssignmentsModule } from './assignments/assignments.module'; // Import the assignments module

@Module({
  imports: [AssignmentsModule], // Register the assignments module here
  controllers: [],
  providers: [],
})
export class AppModule {}