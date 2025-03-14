import { Module } from '@nestjs/common';
import { HabitacionTemporadaService } from './habitacion-temporada.service';
import { HabitacionTemporadaController } from './habitacion-temporada.controller';

@Module({
  controllers: [HabitacionTemporadaController],
  providers: [HabitacionTemporadaService],
})
export class HabitacionTemporadaModule {}
