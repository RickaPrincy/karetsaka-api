import {Body, Controller, Get, Param, Put, Query} from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ApiCriteria, ApiKaretsaka, ApiPagination} from "src/docs/decorators";
import {CarBrand} from "src/model";
import {CarBrandService} from "src/service/car-brand.service";
import {CarsService} from "src/service/cars.service";
import {Pagination, PaginationParams} from "./decorators";
import {Authenticated} from "src/auth/decorators";

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

  @Get("cars/:id")
  findById(@Param("id") id: string) {
    return this.carService.findById(id);
  }

  @Put("/cars/brands")
  @ApiBody({type: [CarBrand]})
  @Authenticated()
  @ApiKaretsaka({
    operationId: "crupdateCarBrands",
    type: [CarBrand],
  })
  saveOrUpdate(@Body() carBrands: CarBrand[]) {
    return this.brandService.saveOrUpdateAll(carBrands);
  }

  @Get("/cars/brands")
  @ApiPagination()
  @ApiCriteria({name: "name", type: "string"})
  @ApiKaretsaka({
    operationId: "getCarBrands",
    type: [CarBrand],
  })
  getAllBrands(
    @Pagination() pagination: PaginationParams,
    @Query("name") name?: string
  ) {
    return this.brandService.findAll(pagination, {name});
  }
}
