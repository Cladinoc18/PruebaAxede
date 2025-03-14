import { Module } from '@nestjs/common';
import { DisponibleService } from './disponible.service';
import { DisponibleController } from './disponible.controller';

@Module({
  controllers: [DisponibleController],
  providers: [DisponibleService],
})
export class DisponibleModule {}
