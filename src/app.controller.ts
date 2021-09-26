import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // POST / Login
  @Post('login')
  login(): any {
    return {}
  }

  // GET / Protected
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}