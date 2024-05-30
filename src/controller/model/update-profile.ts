import {ApiProperty} from "@nestjs/swagger";

export class UpdateProfile {
  @ApiProperty()
  name: string;

  @ApiProperty({required: false})
  picture: string;
}
