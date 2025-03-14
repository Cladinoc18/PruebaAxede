import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reserva } from "../../reserva/entities/reserva.entity";
import { Disponibilidad } from "../../disponible/entities/disponible.entity";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { HabitacionTemporada } from "../../habitacion-temporada/entities/habitacion-temporada.entity";


@Entity({
    name: 'habitaciones'
})

export class Habitacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero: string;

    @Column()
    tipo: string;

    @Column('decimal')
    precio: number;

    @Column({ default: true })
    disponible: boolean;

    @ManyToOne(() => Hotel, hotel => hotel.habitaciones, { onDelete: 'CASCADE' })
    hotel: Hotel;

    @OneToMany(() => Reserva, reserva => reserva.habitacion)
    reservas: Reserva[];

    @OneToMany(() => Disponibilidad, disponibilidad => disponibilidad.habitacion)
    disponibilidades: Disponibilidad[];

    @OneToMany(() => HabitacionTemporada, habitacionTemporada => habitacionTemporada.habitacion)
    habitacionTemporadas: HabitacionTemporada[];

}
