import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habitacion } from "../../habitacion/entities/habitacion.entity";
import { Temporada } from "../../temporada/entities/temporada.entity";

@Entity()
export class HabitacionTemporada {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Habitacion, habitacion => habitacion.habitacionTemporadas, { onDelete: 'CASCADE' })
  habitacion: Habitacion;

  @ManyToOne(() => Temporada, temporada => temporada.habitacionTemporadas, { onDelete: 'CASCADE' })
  temporada: Temporada;

  @Column('decimal')
  precio: number;
}