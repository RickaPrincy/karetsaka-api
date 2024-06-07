import {Body, Controller, Delete, Get, Param, Put} from "@nestjs/common";
import {ApiKaretsaka} from "src/docs/decorators";
import {ImagesService} from "src/service/images.service";
import {Image} from "src/model";
import {Authenticated} from "src/auth/decorators";
import {ApiBody, ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags("Images")
export class ImagesController {
  constructor(private readonly service: ImagesService) {}

  @Get("/images")
  @ApiKaretsaka({
    operationId: "getImages",
    type: [Image],
  })
  findAllByCarId() {
    return this.service.findAll();
  }

  @Get("/images/:id")
  @ApiKaretsaka({
    operationId: "get",
    type: Image,
  })
  findById(@Param("id") id: string) {
    return this.service.findById(id);
  }

  @Delete("/images/:id")
  @Authenticated()
  @ApiKaretsaka({
    operationId: "deleteImageById",
    type: Image,
  })
  async deleteById(@Param("id") id: string) {
    return this.service.deleteById(id);
  }

  @Put("/images")
  @Authenticated()
  @ApiKaretsaka({
    operationId: "saveOrUpdate",
    type: Image,
  })
  @ApiBody({
    type: Image,
  })
  async saveOrUpdate(@Body() image: Image) {
    return this.service.saveOrUpdate(image);
  }
}
