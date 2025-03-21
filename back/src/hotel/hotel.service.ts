import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';


@Injectable()
export class HotelService {
  create(createHotelDto: CreateHotelDto) {
    return 'This action adds a new hotel';
  }

  findAll() {
    return `This action returns all hotel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }


  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
