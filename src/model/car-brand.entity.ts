import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Car} from "./car.entity";

@Entity()
export class CarBrand {
  @PrimaryColumn()
  @ApiProperty({format: "uuid"})
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column({nullable: true})
  @ApiProperty({required: false})
  picture: string;

  @OneToMany(() => Car, (car) => car.brand)
  cars: Car[];
}
