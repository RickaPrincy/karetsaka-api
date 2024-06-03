import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import {Car} from "./car.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Appointment {
  @PrimaryColumn()
  @ApiProperty({format: "uuid"})
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  message: string;

  @Column()
  @ApiProperty()
  contact: string;

  @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  @ApiProperty({format: "date"})
  appointmentDate: string;

  @Column()
  @ApiProperty()
  status: string;

  @ManyToOne(() => Car, {eager: true})
  car: Car;
}
