import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
//escuchar solicitudes y devolver la respuestas 
export class SeedController {
  constructor(private readonly seedService: SeedService) {}


  @Get()
    executeSEED() {
    return this.seedService.executeSeed();
  }


}
