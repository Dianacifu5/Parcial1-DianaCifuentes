import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import {Booking} from './booking.entity';

@Entity()
export class Passenger {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    document_number: number;

    @Column()
    document_type: string;

    @Column()
    email_Phone: string;

    @Column()
    registration_date: Date;

    @Column()
    status: boolean;

    @OneToMany(() => Booking, (booking) => booking.passenger)
    booking: Booking[];
}