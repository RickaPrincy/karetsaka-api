import { Module } from '@nestjs/common';
import { CarsController } from '../controller/cars.controller';
import { CarsService } from '../service/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/model/car.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car])
  ],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
