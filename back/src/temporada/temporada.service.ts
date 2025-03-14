import { Injectable } from '@nestjs/common';
import { CreateTemporadaDto } from './dto/create-temporada.dto';

@Injectable()
export class TemporadaService {
  create(createTemporadaDto: CreateTemporadaDto) {
    return 'This action adds a new temporada';
  }

  findAll() {
    return `This action returns all temporada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temporada`;
  }



  remove(id: number) {
    return `This action removes a #${id} temporada`;
  }
}
