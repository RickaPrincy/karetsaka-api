import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import {Car} from "./car.entity";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  firstName: string;

  @Column()
  email: string;

  @Column()
  message: string;

  @Column()
  contact: string;

  @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  appointmentDate: string;

  @Column()
  status: string;

  @ManyToOne(() => Car, {eager: true})
  car: Car;
}
