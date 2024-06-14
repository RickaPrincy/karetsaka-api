import {Module} from "@nestjs/common";
import {CarsController} from "../controller/cars.controller";
import {CarsService} from "../service/cars.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Car} from "src/model/car.entity";
import {CarBrandService} from "src/service/car-brand.service";
import {CarBrand, Image} from "src/model";
import {FirebaseModule} from "./firebase.module";
import {CarMapper} from "src/controller/mapper";
import {ImagesService} from "src/service";

@Module({
  imports: [TypeOrmModule.forFeature([Car, CarBrand, Image]), FirebaseModule],
  controllers: [CarsController],
  providers: [CarsService, CarBrandService, CarMapper, ImagesService],
})
export class CarsModule {}
