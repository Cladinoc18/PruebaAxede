import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Habitacion } from '../../habitacion/entities/habitacion.entity';


@Entity()
export class Reserva {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  clienteNombre: string;

  @Column()
  clienteEmail: string;

  @ManyToOne(() => Habitacion, habitacion => habitacion.reservas, { eager: true })
  habitacion: Habitacion;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'date' })
  fechaFin: Date;

  @Column({ default: 'pendiente' })
  estado: string;

}