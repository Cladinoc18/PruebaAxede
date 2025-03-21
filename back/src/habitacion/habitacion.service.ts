import { Injectable } from '@nestjs/common';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';

@Injectable()
export class HabitacionService {
  create(createHabitacionDto: CreateHabitacionDto) {
    return 'This action adds a new habitacion';
  }

  findAll() {
    return `This action returns all habitacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habitacion`;
  }


  remove(id: number) {
    return `This action removes a #${id} habitacion`;
  }
}
