import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private configService: ConfigService
  ) {}

  @Get()
  getHello(): string {
    //let port = this.configService.get('DB_PORT')

    return this.appService.getHello();
  }
}
