import {Body, Controller, Get, Param, Put, Query} from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ApiCriteria, ApiKaretsaka, ApiPagination} from "src/docs/decorators";
import {Car, CarBrand} from "src/model";
import {CarBrandService} from "src/service/car-brand.service";
import {CarsService} from "src/service/cars.service";
import {Pagination, PaginationParams} from "./decorators";
import {Authenticated} from "src/auth/decorators";
import {CarMotoType} from "src/model/enums";

@Controller()
@ApiTags("Cars")
export class CarsController {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: CarBrandService
  ) {}

  @Get("/cars")
  @ApiPagination()
  @ApiCriteria(
    {
      name: "motorType",
      schema: {
        type: "string",
        enum: [
          CarMotoType.DIESEL,
          CarMotoType.ELECTRIC,
          CarMotoType.GASOLINE,
          CarMotoType.HYBRID,
        ],
      },
    },
    {name: "brandName", type: "string"},
    {name: "type", type: "string"},
    {name: "model", type: "string"},
    {name: "priceFrom", type: "number"},
    {name: "priceTo", type: "number"}
  )
  @ApiKaretsaka({
    operationId: "getCars",
    type: [Car],
  })
  findAll(
    @Pagination() pagination: PaginationParams,
    @Query("brandName") brandName?: string,
    @Query("motorType") motorType?: CarMotoType,
    @Query("type") type?: string,
    @Query("model") model?: string,
    @Query("priceFrom") priceFrom?: number,
    @Query("priceTo") priceTo?: number
  ) {
    return this.carService.findAll(pagination, {
      brandName,
      motorType,
      type,
      model,
      priceFrom,
      priceTo,
    });
  }

  @Get("cars/:id")
  @ApiKaretsaka({
    operationId: "getCarById",
    type: Car,
  })
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
