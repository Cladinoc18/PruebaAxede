import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';


@Controller('habitacion')
export class HabitacionController {
  constructor(private readonly habitacionService: HabitacionService) {}

  @Post()
  create(@Body() createHabitacionDto: CreateHabitacionDto) {
    return this.habitacionService.create(createHabitacionDto);
  }

  @Get()
  findAll() {
    return this.habitacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitacionService.findOne(+id);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitacionService.remove(+id);
  }
}
