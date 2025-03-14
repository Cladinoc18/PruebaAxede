import { Injectable } from '@nestjs/common';
import { CreateDisponibleDto } from './dto/create-disponible.dto';

@Injectable()
export class DisponibleService {
  create(createDisponibleDto: CreateDisponibleDto) {
    return 'This action adds a new disponible';
  }

  findAll() {
    return `This action returns all disponible`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disponible`;
  }

  remove(id: number) {
    return `This action removes a #${id} disponible`;
  }
}
