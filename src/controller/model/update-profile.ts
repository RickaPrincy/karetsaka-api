import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString} from "class-validator";

export class UpdateProfile {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({required: false})
  @IsOptional()
  @IsString()
  picture: string;
}
