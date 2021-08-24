import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LinkoutAppURL } from './Model/linkoutAppURL';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Online';
  }

  @Post(':id')
  getLinkOutKorea(@Param() params): LinkoutAppURL {
    console.log(params);
    return this.appService.getLinkOutKorea(params.id);
  }
}
