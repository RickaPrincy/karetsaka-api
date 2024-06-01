import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {CarBrand} from "./car-brand.entity";
import {CarMotoType} from "./enums";

@Entity()
export class Car {
  @PrimaryColumn()
  @ApiProperty({format: "uuid"})
  id: string;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty({required: false})
  description?: string;

  @Column()
  @ApiProperty()
  model: string;

  @Column()
  @ApiProperty({minimum: 1})
  price: number;

  @Column("varchar", {array: true})
  @ApiProperty()
  color: string[];

  @Column()
  @ApiProperty({enum: CarMotoType})
  motorType: CarMotoType;

  @Column()
  @ApiProperty({minimum: 1})
  power: number;

  @Column()
  @ApiProperty({minimum: 1})
  placeNumber: number;

  @Column()
  @ApiProperty()
  status: boolean;

  @Column()
  @ApiProperty()
  type: string;

  @ApiProperty({type: CarBrand})
  @ManyToOne(() => CarBrand)
  brand: CarBrand;
}
