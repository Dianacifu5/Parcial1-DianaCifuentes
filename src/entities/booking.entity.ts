import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import {Passenger} from './passenger';

@Entity()
export class Passenger {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reservation_code: string;
    
    @Column()
    purchase_date: Date;

    @Column()
    status: boolean;

    @OneToMany(() => Booking_details, (booking_details) => booking_details.booking)
    booking_details: Booking_details[];

    @ManyToOne(() => Passenger, (passenger) => passenger.booking)
    @JoinColumn({ name: 'passengerName_id' })
    passenger: Passenger;

    
}