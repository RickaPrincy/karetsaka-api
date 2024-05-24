import { Controller, Get, Param } from '@nestjs/common';
import { ImagesService } from 'src/service/images.service';

@Controller('images')
export class ImagesController {
    constructor(private readonly service: ImagesService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param("id") id: string) {
        return this.service.findById(id);
    }
}
