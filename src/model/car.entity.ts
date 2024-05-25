import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column()
  motorType: string;

  @Column()
  power: string;

  @Column()
  placeNumber: number;

  @Column()
  status: boolean;

  @Column()
  type: string;
}
