import { Module } from '@nestjs/common';
import { HabitacionService } from './habitacion.service';
import { HabitacionController } from './habitacion.controller';

@Module({
  controllers: [HabitacionController],
  providers: [HabitacionService],
})
export class HabitacionModule {}
