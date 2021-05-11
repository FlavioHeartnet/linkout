import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {linkoutAppURL} from './Model/linkoutAppURL'
import {Request} from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): String {
    return 'Online'
  }

  @Post(':id')
  getLinkOutKorea(@Param() params): linkoutAppURL {
    return this.appService.getLinkOutKorea(params.id);
  }
}
