import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Flight} from './flight.entity';

@Entity()
export class Aircraft {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    model: string;
    
    @Column()
    registration_number: string;

    @Column()
    passenger_capacity: string;

    @Column()
    incorporation_date: Date;

    @Column()
    last_modification_date: Date;

    @OneToMany(() => Flight, (flight) => flight.airport)
    flights: Flight[];
}