/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

  // Factorial Calculator Endpoint
  @Get('factorial/:number')
  getFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      return { factorial: -1 };  // Return -1 for invalid input
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return { factorial: result };
  }
}