import { Module } from '@nestjs/common';
import { TemporadaService } from './temporada.service';
import { TemporadaController } from './temporada.controller';

@Module({
  controllers: [TemporadaController],
  providers: [TemporadaService],
})
export class TemporadaModule {}
