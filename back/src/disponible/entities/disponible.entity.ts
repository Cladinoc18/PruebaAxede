import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Habitacion } from '../../habitacion/entities/habitacion.entity';

@Entity()
export class Disponibilidad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Habitacion, habitacion => habitacion.disponibilidades, { onDelete: 'CASCADE' })
  habitacion: Habitacion;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ default: true })
  disponible: boolean;
}