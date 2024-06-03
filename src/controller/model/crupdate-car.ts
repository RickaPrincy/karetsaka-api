import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {CarMotoType} from "src/model/enums";

export class CrupdateCar {
  @ApiProperty({format: "uuid"})
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({required: false})
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty({minimum: 1})
  @IsString()
  price: number;

  @ApiProperty()
  @IsArray()
  color: string[];

  @ApiProperty({enum: CarMotoType})
  @IsEnum(CarMotoType)
  motorType: CarMotoType;

  @ApiProperty({minimum: 1})
  power: number;

  @ApiProperty({minimum: 1})
  @IsNumber()
  @Min(1)
  placeNumber: number;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty({format: "uuid"})
  @IsUUID()
  brandId: string;
}
