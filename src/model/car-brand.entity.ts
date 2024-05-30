import {ApiProperty} from "@nestjs/swagger";
import {Column, Entity, PrimaryColumn} from "typeorm";

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
}
