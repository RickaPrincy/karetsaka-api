import {Body, Controller, Get, Param, Put} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {ApiKaretsaka, ApiPagination} from "src/docs/decorators";
import {Car, CarBrand} from "src/model";
import {CarBrandService} from "src/service/car-brand.service";
import {CarsService} from "src/service/cars.service";
import {Pagination, PaginationParams} from "./decorators";

@Controller()
@ApiTags("Cars")
export class CarsController {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: CarBrandService
  ) {}

  @Get("/cars")
  findAll() {
    return this.carService.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    return this.carService.findById(id);
  }

  @Put("/cars/brands")
  saveOrUpdate(@Body() carBrands: CarBrand[]) {
    return this.brandService.saveOrUpdateAll(carBrands);
  }

  @Get("/cars/brands")
  @ApiPagination()
  getAllBrands(@Pagination() pagination: PaginationParams) {
    return this.brandService.findAll(pagination);
  }
}
