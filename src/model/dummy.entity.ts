import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Dummy {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
