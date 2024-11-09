/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
    @Get('prime/:number')
  checkPrime(@Param('number') number: number): { isPrime: boolean } {
    // Convert the input number to an integer
    const num = parseInt(number.toString(), 10);

    // Check for prime number
    if (num <= 1) return { isPrime: false }; // Numbers less than 2 are not prime

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return { isPrime: false };
      }
    }

    return { isPrime: true };
  }
}

