import {Body, Controller, Get, Param, Put, Query} from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ApiCriteria, ApiKaretsaka, ApiPagination} from "src/docs/decorators";
import {Appointment} from "src/model";
import {AppointmentsService} from "src/service/appointments.service";
import {Pagination, PaginationParams} from "./decorators";
import {Authenticated} from "src/auth/decorators";

@Controller()
@ApiTags("Appointments")
export class AppointmentsController {
  constructor(private readonly service: AppointmentsService) {}

  @Get("/appointments")
  @ApiPagination()
  @Authenticated()
  @ApiCriteria({name: "status", type: "string"}, {name: "name", type: "string"})
  @ApiKaretsaka({
    operationId: "getAppointments",
    type: [Appointment],
  })
  findAll(
    @Pagination() pagination: PaginationParams,
    @Query("status") status?: string,
    @Query("name") name?: string
  ) {
    return this.service.findAll(pagination, {
      status,
      name,
    });
  }

  @Get("/appointment/:id")
  @Authenticated()
  @ApiKaretsaka({
    operationId: "getAppointmentById",
    type: Appointment,
  })
  findById(@Param("id") id: string) {
    return this.service.findById(id);
  }

  @Put("/appointments")
  @ApiBody({type: Appointment})
  @ApiKaretsaka({
    operationId: "crupdateAppointments",
    type: Appointment,
  })
  async saveOrUpdateBrands(@Body() appointment: Appointment) {
    return this.saveOrUpdateBrands(appointment);
  }
}
