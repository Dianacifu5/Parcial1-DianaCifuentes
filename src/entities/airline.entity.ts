import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Flight} from './flight.entity';

@Entity()
export class Airline {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    
    @Column()
    origin_country: string;

    @Column()
    IATA_Code: number;

    @Column()
    creation_date: Date;
   
    @Column()
    last_modification_date: Date;

    @OneToMany(() => Flight, (flight) => flight.airline)
    flights: Flight[];
}