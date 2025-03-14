import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { HabitacionService } from '../habitacion/habitacion.service';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
    private readonly habitacionService: HabitacionService,
  ) { }


  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const { habitacionId, fechaInicio, fechaFin } = createReservaDto;


    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinDate = new Date(fechaFin);
    console.log('fechaaaa:', fechaInicioDate);

    if (isNaN(fechaInicioDate.getTime()) || isNaN(fechaFinDate.getTime())) {
      throw new BadRequestException('Formato de fecha inválido.');
    }

    const disponible = await this.esHabitacionDisponible(habitacionId, fechaInicioDate, fechaFinDate);

    if (!disponible) {
      throw new BadRequestException('La habitación no está disponible en estas fechas.');
    }

    const habitacion = await this.habitacionService.findOne(habitacionId);
    

    const nuevaReserva = new Reserva();
   
    nuevaReserva.fechaInicio = fechaInicioDate;
    nuevaReserva.fechaFin = fechaFinDate;

    return this.reservaRepository.save(nuevaReserva);
  }



  async findAll(): Promise<Reserva[]> {
    return await this.reservaRepository.find({ relations: ['habitacion', 'hotel'] });
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservaRepository.findOne({
      where: { id },
      relations: ['habitacion', 'hotel'],
    });

    if (!reserva) {
      throw new NotFoundException(`Reserva con ID ${id} no encontrada`);
    }

    return reserva;
  }

  async esHabitacionDisponible(habitacionId: number, fechaInicio: Date, fechaFin: Date): Promise<boolean> {
    const reservas = await this.findAll();

    const reservasEnRango = reservas.filter(reserva => {
      // Validamos si habitacion es un objeto o un string
      if (typeof reserva.habitacion === 'string') {
        console.error('❌ Error: reserva.habitacion es un string en lugar de un objeto:', reserva.habitacion);
        return false;
      }
  
      return (
        reserva.habitacion.id === habitacionId &&
        reserva.fechaInicio <= fechaFin &&
        reserva.fechaFin >= fechaInicio
      );
    });

    return reservasEnRango.length === 0;
  }

}
