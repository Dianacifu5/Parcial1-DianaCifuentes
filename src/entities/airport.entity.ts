import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Flight} from './flight.entity';

@Entity()
export class Airport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    state: Boolean;

    @Column()
    creation_date: Date;
   
    @Column()
    last_modification_date: Date;

    @OneToMany(() => Flight, (flight) => flight.airport)
    flights: Flight[];
}