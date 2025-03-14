import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Habitacion } from "../../habitacion/entities/habitacion.entity";

@Entity({
    name: 'hotels'
})

export class Hotel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    ciudad: string;

    @OneToMany(() => Habitacion, habitacion => habitacion.hotel)
    habitaciones: Habitacion[];

}
