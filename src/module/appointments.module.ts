import {Module} from "@nestjs/common";
import {AppointmentsController} from "../controller/appointments.controller";
import {AppointmentsService} from "../service/appointments.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Appointment} from "src/model/appointment.entity";
import {FirebaseModule} from "./firebase.module";

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), FirebaseModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
