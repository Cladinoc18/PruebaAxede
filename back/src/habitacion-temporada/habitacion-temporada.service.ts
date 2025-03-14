import { Injectable } from '@nestjs/common';
import { CreateHabitacionTemporadaDto } from './dto/create-habitacion-temporada.dto';

@Injectable()
export class HabitacionTemporadaService {
  create(createHabitacionTemporadaDto: CreateHabitacionTemporadaDto) {
    return 'This action adds a new habitacionTemporada';
  }

  findAll() {
    return `This action returns all habitacionTemporada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitacionTemporada`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitacionTemporada`;
  }
}
