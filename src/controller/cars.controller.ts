import {Controller, Get, Param} from "@nestjs/common";
import {CarsService} from "src/service/cars.service";

@Controller("cars")
export class CarsController {
  constructor(private readonly service: CarsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findById(@Param("id") id: string) {
    return this.service.findById(id);
  }
}
