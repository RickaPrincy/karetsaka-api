import {ApiProperty} from "@nestjs/swagger";

export class CreateImage {
  @ApiProperty({})
  image: string;
}
