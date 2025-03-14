import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotel.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeOrm';
import { HabitacionModule } from './habitacion/habitacion.module';
import { TemporadaModule } from './temporada/temporada.module';
import { DisponibleModule } from './disponible/disponible.module';
import { ReservaModule } from './reserva/reserva.module';
import { HabitacionTemporadaModule } from './habitacion-temporada/habitacion-temporada.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get("typeorm")
    }),
    HotelModule,
    HabitacionModule,
    TemporadaModule,
    DisponibleModule,
    ReservaModule,
    HabitacionTemporadaModule
  ], 
})
export class AppModule {}