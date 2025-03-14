import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemporadaService } from './temporada.service';
import { CreateTemporadaDto } from './dto/create-temporada.dto';


@Controller('temporada')
export class TemporadaController {
  constructor(private readonly temporadaService: TemporadaService) {}

  @Post()
  create(@Body() createTemporadaDto: CreateTemporadaDto) {
    return this.temporadaService.create(createTemporadaDto);
  }

  @Get()
  findAll() {
    return this.temporadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temporadaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temporadaService.remove(+id);
  }
}
