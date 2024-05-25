import {Module} from "@nestjs/common";
import {AppointmentsController} from "../controller/appointments.controller";
import {AppointmentsService} from "../service/appointments.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Appointment} from "src/model/appointment.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Appointment])],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
