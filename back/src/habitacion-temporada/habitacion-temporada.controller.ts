import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitacionTemporadaService } from './habitacion-temporada.service';
import { CreateHabitacionTemporadaDto } from './dto/create-habitacion-temporada.dto';

@Controller('habitacion-temporada')
export class HabitacionTemporadaController {
  constructor(private readonly habitacionTemporadaService: HabitacionTemporadaService) {}

  @Post()
  create(@Body() createHabitacionTemporadaDto: CreateHabitacionTemporadaDto) {
    return this.habitacionTemporadaService.create(createHabitacionTemporadaDto);
  }

  @Get()
  findAll() {
    return this.habitacionTemporadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitacionTemporadaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitacionTemporadaService.remove(+id);
  }
}
