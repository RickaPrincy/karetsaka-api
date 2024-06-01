import {Injectable} from "@nestjs/common";
import {Car} from "src/model";
import {CarBrandService} from "src/service/car-brand.service";
import {CrupdateCar} from "../model/crupdate-car";

@Injectable()
export class CarMapper {
  constructor(private readonly carBrandService: CarBrandService) {}

  async crupdateToDomain(crupdateCar: CrupdateCar): Promise<Car> {
    const brand = await this.carBrandService.findById(crupdateCar.brandId);
    return {
      brand,
      ...crupdateCar,
    };
  }
}
