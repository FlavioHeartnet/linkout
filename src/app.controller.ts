import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { linkoutAppURL } from './Model/linkoutAppURL';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Online';
  }

  @Post(':id')
  getLinkOutKorea(@Param() params): linkoutAppURL {
    console.log(params);
    return this.appService.getLinkOutKorea(params.id);
  }
}
