import { ApiProperty } from "@nestjs/swagger";
import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Image {
  @PrimaryColumn()
  @ApiProperty({format: "uuid"})
  id: string;

  @Column()
  @ApiProperty()
  url: string;

  @Column()
  @ApiProperty()
  productId: string;
}
