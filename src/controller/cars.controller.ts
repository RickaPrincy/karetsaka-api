import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Put,
  Query,
} from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ApiCriteria, ApiKaretsaka, ApiPagination} from "src/docs/decorators";
import {Car, CarBrand} from "src/model";
import {CarBrandService, CarsService} from "src/service";
import {Pagination, PaginationParams} from "./decorators";
import {Authenticated} from "src/auth/decorators";
import {CarMotoType} from "src/model/enums";
import {CrupdateCar} from "./model";
import {CarMapper} from "./mapper";

@Controller()
@ApiTags("Cars")
export class CarsController {
  constructor(
    private readonly carMapper: CarMapper,
    private readonly carService: CarsService,
    private readonly brandService: CarBrandService
  ) {}

  @Put("/cars")
  @ApiBody({type: CrupdateCar})
  @Authenticated()
  @ApiKaretsaka({
    operationId: "crupdateCar",
    type: Car,
  })
  async saveOrUpdate(@Body() crupdateCar: CrupdateCar) {
    try {
      const car = await this.carMapper.crupdateToDomain(crupdateCar);
      return this.carService.saveOrUpdate(car);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

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

  @Put("/cars/brands")
  @ApiBody({type: CarBrand})
  @Authenticated()
  @ApiKaretsaka({
    operationId: "crupdateCarBrands",
    type: CarBrand,
  })
  async saveOrUpdateBrands(@Body() carBrand: CarBrand) {
    return this.brandService.saveOrUpdate(carBrand);
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

  @Get("cars/:id")
  @ApiKaretsaka({
    operationId: "getCarById",
    type: Car,
  })
  findById(@Param("id") id: string) {
    return this.carService.findById(id);
  }
}
