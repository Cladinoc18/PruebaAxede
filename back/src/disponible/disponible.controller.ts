import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisponibleService } from './disponible.service';
import { CreateDisponibleDto } from './dto/create-disponible.dto';


@Controller('disponible')
export class DisponibleController {
  constructor(private readonly disponibleService: DisponibleService) {}

  @Post()
  create(@Body() createDisponibleDto: CreateDisponibleDto) {
    return this.disponibleService.create(createDisponibleDto);
  }

  @Get()
  findAll() {
    return this.disponibleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disponibleService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disponibleService.remove(+id);
  }
}
