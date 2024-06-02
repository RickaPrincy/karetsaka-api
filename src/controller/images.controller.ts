import {
  Controller,
  Get,
  Param,
  Put,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import {ApiKaretsaka} from "src/docs/decorators";
import {ImagesService} from "src/service/images.service";
import {Image} from "src/model";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller("images")
export class ImagesController {
  constructor(private readonly service: ImagesService) {}

  @Get()
  @ApiKaretsaka({
    operationId: "lool",
    type: [Image],
  })
  findAllByCarId() {
    return this.service.findAll();
  }

  @Get(":id")
  @ApiKaretsaka({
    operationId: "get",
    type: Image,
  })
  findById(@Param("id") id: string) {
    return this.service.findById(id);
  }
}
