import {Injectable} from "@nestjs/common";
import {Car, Image} from "src/model";
import {CarBrandService} from "src/service/car-brand.service";
import {CrupdateCar} from "../model/crupdate-car";
import {ImagesService} from "src/service";

@Injectable()
export class CarMapper {
  constructor(
    private readonly carBrandService: CarBrandService,
    private readonly imageService: ImagesService
  ) {}

  async crupdateToDomain(crupdateCar: CrupdateCar): Promise<Car> {
    const brand = await this.carBrandService.findById(crupdateCar.brandId);
    const images: Image[] = [];

    for (let imageId of crupdateCar.imagesId) {
      images.push(await this.imageService.findById(imageId));
    }

    return {
      brand,
      ...crupdateCar,
      images,
    };
  }
}
