import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Dummy {
  @ApiProperty({format: "uuid", required: true})
  @PrimaryColumn()
  id: string;

  @ApiProperty({required: true})
  @Column()
  name: string;
}
