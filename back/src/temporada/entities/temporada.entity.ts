import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HabitacionTemporada } from '../../habitacion-temporada/entities/habitacion-temporada.entity';

@Entity()
export class Temporada {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string; 

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'date' })
  fechaFin: Date;

  @Column('decimal')
  factorPrecio: number; 

  @OneToMany(() => HabitacionTemporada, habitacionTemporada => habitacionTemporada.temporada)
habitacionTemporadas: HabitacionTemporada[];

}