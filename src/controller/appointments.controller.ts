import { Controller, Get, Param } from '@nestjs/common';
import { AppointmentsService } from 'src/service/appointments.service';

@Controller('appointments')
export class AppointmentsController {
    constructor(private readonly service: AppointmentsService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param("id") id: string) {
        return this.service.findById(id);
    }

}
